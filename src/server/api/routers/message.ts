import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { ChatMessage, Prisma, PrismaClient } from "@prisma/client";
import { Message } from "@/app/chat/_components/messages/message-bubble";

type SortField = "createdAt";

function aiRandomMessage() {
  const messages = [
    "私はAIなので感情はありませんが、お手伝いできますよ！",
    "今日は晴れで、最高気温は25°Cです。",
    "どういたしまして！他に何かお手伝いできますか？",
    "天気のこと以外にも聞きたいことがあります。今日は友人と一緒に遊びに行こうと思っていますが、どこに行くのが良いか、AIの意見を教えてください。",
    "それは素晴らしいアイデアですね！お友達と一緒に行けるおすすめの場所としては、近くの公園や、美術館などが挙げられます。ご興味があるならば、具体的な場所をもう少し教えていただけますか？",
  ];

  return messages[Math.floor(Math.random() * messages.length)] as string;
}

function toMessage(messages: ChatMessage[]): Message[] {
  return messages.map((message) => ({
    id: message.id,
    role: message.role as "user" | "bot",
    message: message.message,
  }));
}

export const messageRouter = createTRPCRouter({
  countAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.chat.count();
  }),

  findAll: protectedProcedure
    .input(
      z.object({
        options: z.object({
          conditions: z.object({
            ids: z.array(z.string()).optional(),
            chatIds: z.array(z.string()).optional(),
          }),
          sort: z.object({
            field: z
              .string()
              .refine((field): field is SortField =>
                ["createdAt", "updatedAt"].includes(field)
              ),
            order: z.literal("asc").or(z.literal("desc")),
          }),
        }),
      })
    )
    .query(async ({ ctx, input }) => {
      const { options } = input;
      const messages = await ctx.db.chatMessage.findMany({
        where: {
          id: { in: options.conditions.ids },
          chatId: { in: options.conditions.chatIds },
        },
        orderBy: {
          [options.sort.field]: options.sort.order,
        },
      });

      return toMessage(messages);
    }),

  create: protectedProcedure
    .input(z.object({ chatId: z.string(), message: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userMessage = input.message;
      const aiMessage = aiRandomMessage();

      const data = await ctx.db.$transaction([
        ctx.db.chatMessage.create({
          data: {
            chat: { connect: { id: input.chatId } },
            role: "user",
            message: userMessage,
          },
        }),
        ctx.db.chatMessage.create({
          data: {
            chat: { connect: { id: input.chatId } },
            role: "bot",
            message: aiMessage,
          },
        }),
      ]);

      const botMessage = data[1].message;

      return { role: "bot", message: botMessage };
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.chatMessage.delete({
        where: { id: input.id },
      });
    }),
});

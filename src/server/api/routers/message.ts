import { z } from "zod";

import { type Message } from "@/app/chat/_components/messages/message-bubble";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { createChat } from "@/server/openai/chat";
import { type ChatMessage } from "@prisma/client";
import type OpenAI from "openai";

type SortField = "createdAt";

type Role = "user" | "system" | "assistant";

function toMessage(messages: ChatMessage[]): Message[] {
  return messages.map((message) => ({
    id: message.id,
    role: message.role as "user" | "assistant" | "system",
    message: message.message,
  }));
}

function toOpenAiChatMessage(
  message: Message
): OpenAI.Chat.Completions.ChatCompletionMessageParam {
  return {
    role: message.role,
    content: message.message,
  };
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
    .input(
      z.object({ chatId: z.string(), message: z.string(), prompt: z.string() })
    )
    .mutation(async ({ ctx, input }) => {
      const systemMessage = { role: "system" as Role, message: input.prompt };

      const messageHistoriesRow = await ctx.db.chatMessage.findMany({
        where: { chatId: input.chatId },
        orderBy: { createdAt: "asc" },
      });

      const messageHistories = messageHistoriesRow.map((message) => ({
        role: message.role as Role,
        message: message.message,
      }));

      const userMessage = { role: "user" as Role, message: input.message };

      const messages: Message[] = [
        systemMessage,
        ...messageHistories,
        userMessage,
      ];

      const chatMessages = messages.map(toOpenAiChatMessage);

      const aiMessage = await createChat(chatMessages);

      const data = await ctx.db.$transaction([
        ctx.db.chatMessage.create({
          data: {
            chat: { connect: { id: input.chatId } },
            role: "user",
            message: userMessage.message,
          },
        }),
        ctx.db.chatMessage.create({
          data: {
            chat: { connect: { id: input.chatId } },
            role: "assistant",
            message: aiMessage,
          },
        }),
      ]);

      const assistantMessage = data[1].message;

      return { role: "assistant" as Role, message: assistantMessage };
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.chatMessage.delete({
        where: { id: input.id },
      });
    }),
});

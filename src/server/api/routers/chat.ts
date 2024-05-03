import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

type SortField = "createdAt" | "updatedAt";

export const chatRouter = createTRPCRouter({
  countAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.chat.count();
  }),

  findAll: protectedProcedure
    .input(
      z.object({
        options: z.object({
          conditions: z.object({
            ids: z.array(z.string()).optional(),
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
      const chats = await ctx.db.chat.findMany({
        include: {
          chatMessage: {
            select: {
              id: true,
            },
          },
        },
        where: {
          id: { in: options.conditions.ids },
          userId: ctx.session.user.id,
        },
        orderBy: {
          [options.sort.field]: options.sort.order,
        },
      });

      console.log(chats);

      const chatsWithMessageCount = chats.map((chat) => ({
        ...chat,
        messageCount: chat.chatMessage.length,
      }));

      return chatsWithMessageCount;
    }),

  create: protectedProcedure.mutation(async ({ ctx }) => {
    const chat = await ctx.db.chat.create({
      data: {
        user: { connect: { id: ctx.session.user.id } },
      },
    });

    return chat;
  }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.chat.delete({
        where: { id: input.id },
      });
    }),
});

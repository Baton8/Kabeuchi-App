"use client";
import { useSearchParams } from "next/navigation";
import { Form } from "./form";
import { MessageBubble } from "./message-bubble";
import { api } from "@/trpc/react";
import { Loading } from "@/app/_components/loading";

export const ChatContainer = () => {
  const searchParams = useSearchParams();
  const chatId = searchParams.get("chatId");

  const { data: messages, isLoading } = api.message.findAll.useQuery({
    options: {
      conditions: {
        chatIds: chatId ? [chatId] : undefined,
      },
      sort: {
        field: "createdAt",
        order: "asc",
      },
    },
  });

  return (
    <div className="flex flex-col justify-between items-center h-screen">
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="w-full flex flex-col justify-start items-start overflow-y-scroll py-2">
          {messages?.map((message, index) => (
            <MessageBubble key={index} message={message} />
          ))}
        </div>
      )}
      <div className="w-full pt-4">
        <Form />
      </div>
    </div>
  );
};

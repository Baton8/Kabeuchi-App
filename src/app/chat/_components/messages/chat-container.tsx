"use client";
import { Loading } from "@/app/_components/loading";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useCurrentChatId } from "../../_hooks/use-current-chat-id";
import { useMessages } from "../../_hooks/use-message";
import { Form } from "./form";
import { MessageBubble } from "./message-bubble";
import { Dashboard } from "../dashboard/dashboard";

const ChatContainerWithoutSuspense = () => {
  const searchParams = useSearchParams();
  const chatId = searchParams.get("id");
  const { setCurrentChatId } = useCurrentChatId();
  const { messages, isLoading } = useMessages();

  useEffect(() => {
    if (chatId) {
      setCurrentChatId(chatId);
    }
  }, [chatId, setCurrentChatId]);

  if (!chatId) {
    return <Dashboard />;
  }

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

export const ChatContainer = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ChatContainerWithoutSuspense />
    </Suspense>
  );
};

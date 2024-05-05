import { api } from "@/trpc/react";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { type Message } from "../_components/messages/message-bubble";
import { useCurrentChatId } from "./use-current-chat-id";

const messagesAtom = atom<Message[]>([]);

export const useMessages = () => {
  const [messages, setMessages] = useAtom(messagesAtom);
  const { currentChatId } = useCurrentChatId();

  const { data: messagesFromApi, isLoading } = api.message.findAll.useQuery(
    {
      options: {
        conditions: {
          chatIds: currentChatId ? [currentChatId] : undefined,
        },
        sort: {
          field: "createdAt",
          order: "asc",
        },
      },
    },
    {
      enabled: !!currentChatId,
    }
  );

  useEffect(() => {
    if (messagesFromApi) {
      setMessages(messagesFromApi);
    }
  }, [messagesFromApi, setMessages]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return {
    messages,
    isLoading,
    addMessage,
  };
};

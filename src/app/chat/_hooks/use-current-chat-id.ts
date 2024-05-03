import { atom, useAtom } from "jotai";

const currentChatIdAtom = atom<string | null>(null);

export const useCurrentChatId = () => {
  const [currentChatId, setCurrentChatId] = useAtom(currentChatIdAtom);

  const setCurrentChatIdHandler = (chatId: string) => {
    setCurrentChatId(chatId);
  };

  return {
    currentChatId,
    setCurrentChatId: setCurrentChatIdHandler,
  };
};

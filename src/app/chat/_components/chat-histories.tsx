"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { FC } from "react";
import { useChat } from "../_hooks/use-chat";
import { Loading } from "@/app/_components/loading";

type ChatHistory = {
  id: string;
  createdAt: Date;
};

type ChatHistoriesProps = {
  chatHistories: ChatHistory[];
};

export const ChatHistories: FC<ChatHistoriesProps> = ({ chatHistories }) => {
  const formattedDate = (date: Date) => {
    return new Date(date).toLocaleString();
  };
  return (
    <div>
      {chatHistories.map((chatHistory) => (
        <div key={chatHistory.id}>
          <div>{formattedDate(chatHistory.createdAt)}</div>
        </div>
      ))}
    </div>
  );
};

const chatHistoriesModalOpenAtom = atom(false);

export function useChatHistoriesModal() {
  const setAttributesModalOpen = useSetAtom(chatHistoriesModalOpenAtom);

  const handleModalOpen = () => {
    setAttributesModalOpen(true);
  };

  const handleModalClose = () => {
    setAttributesModalOpen(false);
  };

  return { handleModalOpen, handleModalClose };
}

type ChatHistoriesModalProps = {};

export const ChatHistoriesModal: FC<ChatHistoriesModalProps> = () => {
  const isOpen = useAtomValue(chatHistoriesModalOpenAtom);
  const { handleModalClose } = useChatHistoriesModal();
  const { data, isLoading } = useChat();

  return (
    <Modal size={"4xl"} isOpen={isOpen} onClose={handleModalClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">会話履歴</ModalHeader>
            <ModalBody>
              {isLoading ? (
                <Loading />
              ) : (
                <ChatHistories chatHistories={data || []} />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                閉じる
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

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

type ChatHistory = {
  id: string;
  params: string;
  createdAt: string;
};

type ChatHistoriesProps = {
  chatHistories: ChatHistory[];
};

export const ChatHistories: FC<ChatHistoriesProps> = ({ chatHistories }) => {
  return (
    <div>
      {chatHistories.map((chatHistory) => (
        <div key={chatHistory.id}>
          <div>{chatHistory.params}</div>
          <div>{chatHistory.createdAt}</div>
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

  return (
    <Modal size={"4xl"} isOpen={isOpen} onClose={handleModalClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">会話履歴</ModalHeader>
            <ModalBody>
              <ChatHistories
                chatHistories={[
                  {
                    id: "1",
                    params: "test1",
                    createdAt: "2021-09-01",
                  },
                  {
                    id: "2",
                    params: "test2",
                    createdAt: "2021-09-02",
                  },
                ]}
              />
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

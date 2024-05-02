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

type ConversationHistory = {
  id: string;
  params: string;
  createdAt: string;
};

type ConversationHistoriesProps = {
  conversationHistories: ConversationHistory[];
};

export const ConversationHistories: FC<ConversationHistoriesProps> = ({
  conversationHistories,
}) => {
  return (
    <div>
      {conversationHistories.map((conversationHistory) => (
        <div key={conversationHistory.id}>
          <div>{conversationHistory.params}</div>
          <div>{conversationHistory.createdAt}</div>
        </div>
      ))}
    </div>
  );
};

const conversationHistoriesModalOpenAtom = atom(false);

export function useConversationHistoriesModal() {
  const setAttributesModalOpen = useSetAtom(conversationHistoriesModalOpenAtom);

  const handleModalOpen = () => {
    setAttributesModalOpen(true);
  };

  const handleModalClose = () => {
    setAttributesModalOpen(false);
  };

  return { handleModalOpen, handleModalClose };
}

type ConversationHistoriesModalProps = {};

export const ConversationHistoriesModal: FC<
  ConversationHistoriesModalProps
> = () => {
  const isOpen = useAtomValue(conversationHistoriesModalOpenAtom);
  const { handleModalClose } = useConversationHistoriesModal();

  return (
    <Modal size={"4xl"} isOpen={isOpen} onClose={handleModalClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">会話履歴</ModalHeader>
            <ModalBody>
              <ConversationHistories
                conversationHistories={[
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

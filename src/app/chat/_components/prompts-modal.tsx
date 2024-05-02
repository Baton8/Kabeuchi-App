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

type Prompt = {
  id: string;
  text: string;
  createdAt: string;
};

type PromptsProps = {
  prompts: Prompt[];
};

export const Prompts: FC<PromptsProps> = ({ prompts }) => {
  return (
    <div>
      {prompts.map((prompt) => (
        <div key={prompt.id}>
          <div>{prompt.text}</div>
          <div>{prompt.createdAt}</div>
        </div>
      ))}
    </div>
  );
};

const promptsModalAtom = atom(false);

export function usePromptsModal() {
  const setAttributesModalOpen = useSetAtom(promptsModalAtom);

  const handleModalOpen = () => {
    setAttributesModalOpen(true);
  };

  const handleModalClose = () => {
    setAttributesModalOpen(false);
  };

  return { handleModalOpen, handleModalClose };
}

type PromptsModalProps = {};

export const PromptsModal: FC<PromptsModalProps> = () => {
  const isOpen = useAtomValue(promptsModalAtom);
  const { handleModalClose } = usePromptsModal();

  return (
    <Modal size={"4xl"} isOpen={isOpen} onClose={handleModalClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              プロンプト
            </ModalHeader>
            <ModalBody>
              <Prompts
                prompts={[
                  {
                    id: "1",
                    text: "こんにちは",
                    createdAt: "2021-09-01",
                  },
                  {
                    id: "2",
                    text: "こんばんは",
                    createdAt: "2021-09-02",
                  },
                  {
                    id: "3",
                    text: "おはよう",
                    createdAt: "2021-09-03",
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

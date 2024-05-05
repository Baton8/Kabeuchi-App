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
import type { FC } from "react";

type Prompt = {
  text: string;
};

type PromptProps = {
  prompt: Prompt;
};

export const Prompt: FC<PromptProps> = ({ prompt }) => {
  return <div>{prompt.text}</div>;
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

export const PromptsModal: FC = () => {
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
              <Prompt prompt={{ text: "プロンプト" }} />
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

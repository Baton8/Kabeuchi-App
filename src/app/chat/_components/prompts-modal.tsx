"use client";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { useRef, type FC } from "react";
import { usePrompt } from "../_hooks/use-prompt";
import { type Attributes } from "../_hooks/use-attributes";

const replacedText = {
  age: "${age}",
  gender: "${gender}",
  education: "${education}",
  jobHistory: "${jobHistory}",
  jobTitle: "${jobTitle}",
  jobPosition: "${jobPosition}",
  communicationStyle: "${communicationStyle}",
  residence: "${residence}",
  income: "${income}",
  skillSet: "${skillSet}",
} as const;

export const replacePlaceholders = (
  template: string,
  attributes: Attributes
): string => {
  return template.replace(
    /\$\{(\w+)\}/g,
    (_, key) => attributes[key as keyof Attributes] || ""
  );
};

export const Prompt: FC = () => {
  const { prompt, setPrompt, resetPrompt } = usePrompt();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertTextAtCursor = (insertText: string) => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newText =
        prompt.substring(0, start) + insertText + prompt.substring(end);
      setPrompt(newText);

      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd =
          start + insertText.length;
        textarea.focus();
      }, 0);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-center items-start">
        <p>変数</p>
        <ButtonGroup>
          <Button onPress={() => insertTextAtCursor(replacedText.gender)}>
            性別
          </Button>
          <Button onPress={() => insertTextAtCursor(replacedText.age)}>
            年齢
          </Button>
          <Button onPress={() => insertTextAtCursor(replacedText.education)}>
            学歴
          </Button>
          <Button onPress={() => insertTextAtCursor(replacedText.residence)}>
            居住地域
          </Button>
          <Button
            onPress={() => insertTextAtCursor(replacedText.communicationStyle)}
          >
            コミュニケーションスタイル
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onPress={() => insertTextAtCursor(replacedText.jobTitle)}>
            職種
          </Button>
          <Button onPress={() => insertTextAtCursor(replacedText.jobHistory)}>
            職歴
          </Button>
          <Button onPress={() => insertTextAtCursor(replacedText.jobPosition)}>
            役職
          </Button>
          <Button onPress={() => insertTextAtCursor(replacedText.income)}>
            所得
          </Button>
          <Button onPress={() => insertTextAtCursor(replacedText.skillSet)}>
            スキルセット
          </Button>
        </ButtonGroup>
      </div>
      <Textarea value={prompt} ref={textareaRef} onValueChange={setPrompt} />
      <div>
        <Button onClick={resetPrompt} color="warning">
          リセット
        </Button>
      </div>
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
              <Prompt />
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

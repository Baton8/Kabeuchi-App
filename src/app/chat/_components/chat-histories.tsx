"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { type FC } from "react";
import { useChat } from "../_hooks/use-chat";
import { Loading } from "@/app/_components/loading";
import { useRouter } from "next/navigation";

type ChatHistory = {
  id: string;
  messageCount: number;
  createdAt: Date;
};

type ChatHistoriesProps = {
  chatHistories: ChatHistory[];
  handleModalClose: () => void;
};

const ChatHistories: FC<ChatHistoriesProps> = ({
  chatHistories,
  handleModalClose,
}) => {
  const router = useRouter();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleOnPress = (id: string) => {
    router.push(`/chat?id=${id}`);
    handleModalClose();
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4 overflow-y-scroll">
      {chatHistories.map((ch) => (
        <Card
          key={ch.id}
          isPressable
          className="px-8 py-4 hover:scale-105"
          onPress={() => handleOnPress(ch.id)}
        >
          <CardBody>
            <span>{formatDate(ch.createdAt)}</span>
            <span>メッセージ数: {ch.messageCount}</span>
          </CardBody>
        </Card>
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

export const ChatHistoriesModal: FC = () => {
  const isOpen = useAtomValue(chatHistoriesModalOpenAtom);
  const { handleModalClose } = useChatHistoriesModal();
  const { data, isLoading } = useChat();

  return (
    <Modal size={"3xl"} isOpen={isOpen} onClose={handleModalClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">会話履歴</ModalHeader>
            <ModalBody>
              {isLoading ? (
                <Loading />
              ) : (
                <ChatHistories
                  chatHistories={data ?? []}
                  handleModalClose={handleModalClose}
                />
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

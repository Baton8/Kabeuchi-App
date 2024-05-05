import { Loading } from "@/app/_components/loading";
import { Card, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useChat } from "../../_hooks/use-chat";
import { useAttributesModal } from "../attributes-modal";
import { usePromptsModal } from "../prompts-modal";

const ChatList = () => {
  const { data, isLoading } = useChat();
  const router = useRouter();
  if (isLoading) {
    return <Loading />;
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {data?.map((chat) => (
        <Card
          key={chat.id}
          isPressable
          className="px-8 py-4 hover:scale-105"
          onPress={() => router.push(`/chat?id=${chat.id}`)}
        >
          <CardBody>
            <span>{formatDate(chat.createdAt)}</span>
            <span>メッセージ数: {chat.messageCount}</span>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export const Dashboard = () => {
  const { create } = useChat();
  const { handleModalOpen: openPromptModal } = usePromptsModal();
  const { handleModalOpen: openSettingsModal } = useAttributesModal();
  return (
    <div className="w-full h-screen">
      <h1 className="text-4xl font-bold p-4">Dashboard</h1>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Menu</h2>
        <div className="flex flex-row justify-start items-center gap-8 mt-4">
          <Card
            isPressable
            className="px-8 py-4 hover:scale-105"
            onPress={openPromptModal}
          >
            <CardBody>
              <span className="font-bold">Prompt</span>
            </CardBody>
          </Card>
          <Card
            isPressable
            className="px-8 py-4 hover:scale-105"
            onPress={openSettingsModal}
          >
            <CardBody>
              <span className="font-bold">Settings</span>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Chat</h2>
        <div className="grid grid-cols-4 justify-start items-center gap-8 mt-4">
          <Card
            isPressable
            className="px-8 py-4 bg-primary-500 hover:scale-105"
            onPress={create}
          >
            <CardBody>
              <span className="text-white font-bold">New Chat</span>
              <span className="text-white text-xs">
                新しくチャットをはじめる。
              </span>
            </CardBody>
          </Card>
          <ChatList />
        </div>
      </div>
    </div>
  );
};

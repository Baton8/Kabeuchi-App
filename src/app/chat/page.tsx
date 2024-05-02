import { Divider } from "@nextui-org/react";
import { AttributesModal } from "./_components/attributes-modal";
import { AttributeSidebar } from "./_components/attributes-sidebar";
import { ChatContainer } from "./_components/messages/chat-container";
import { ConversationHistoriesModal } from "./_components/conversation-histories";

export default function Page() {
  return (
    <div className="flex flex-row h-screen items-center justify-center">
      <AttributeSidebar />
      <AttributesModal />
      <ConversationHistoriesModal />
      <Divider orientation="vertical" className="h-[90%]" />
      <main className="w-full">
        <ChatContainer />
      </main>
    </div>
  );
}

"use client";
import { Button, Divider } from "@nextui-org/react";
import { TbPrompt } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { TbHistory } from "react-icons/tb";
import { MdOutlineAdd } from "react-icons/md";
import { useAttributesModal } from "./attributes-modal";
import Image from "next/image";
import Logo from "@/assets/images/wallbouncing.png";
import { useConversationHistoriesModal } from "./conversation-histories";

export const AttributeSidebar = () => {
  const { handleModalOpen: attributesModalOpen } = useAttributesModal();
  const { handleModalOpen: conversationHistoriesModalOpen } =
    useConversationHistoriesModal();
  return (
    <aside className="flex flex-col justify-between items-center w-16 gap-4 h-screen">
      <div className="mt-4 flex flex-col justify-center items-center w-full gap-2">
        <Button isIconOnly aria-label="WallBouncing" variant="bordered">
          <Image src={Logo} alt="WallBouncing" />
        </Button>
        <Divider className="w-[80%]" />
        <Button isIconOnly color="primary" aria-label="Add Conversation">
          <MdOutlineAdd className="text-xl" />
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center w-full gap-4">
        <Button isIconOnly color="primary" aria-label="Prompt">
          <TbPrompt className="text-xl" />
        </Button>
        <Button
          isIconOnly
          color="primary"
          aria-label="Settings"
          onPress={attributesModalOpen}
        >
          <TbSettings className="text-xl" />
        </Button>
        <Button
          isIconOnly
          color="primary"
          aria-label="History"
          onPress={conversationHistoriesModalOpen}
        >
          <TbHistory className="text-xl" />
        </Button>
      </div>
      <div></div>
    </aside>
  );
};

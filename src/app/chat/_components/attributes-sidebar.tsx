"use client";
import { Button, Divider, Tooltip } from "@nextui-org/react";
import { TbPrompt } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { TbHistory } from "react-icons/tb";
import { MdOutlineAdd } from "react-icons/md";
import { useAttributesModal } from "./attributes-modal";
import Image from "next/image";
import Logo from "@/assets/images/wallbouncing.png";
import { useConversationHistoriesModal } from "./conversation-histories";
import { usePromptsModal } from "./prompts-modal";

export const AttributeSidebar = () => {
  const { handleModalOpen: attributesModalOpen } = useAttributesModal();
  const { handleModalOpen: conversationHistoriesModalOpen } =
    useConversationHistoriesModal();
  const { handleModalOpen: promptsModalOpen } = usePromptsModal();

  return (
    <aside className="flex flex-col justify-between items-center w-16 gap-4 h-screen">
      <div className="mt-4 flex flex-col justify-center items-center w-full gap-2">
        <Tooltip content="Top" placement="right" color="primary">
          <Button isIconOnly aria-label="WallBouncing" variant="bordered">
            <Image src={Logo} alt="WallBouncing" />
          </Button>
        </Tooltip>
        <Divider className="w-[80%]" />
        <Tooltip content="Add Chat" placement="right" color="primary">
          <Button isIconOnly color="primary" aria-label="Add Chat">
            <MdOutlineAdd className="text-xl" />
          </Button>
        </Tooltip>
      </div>

      <div className="flex flex-col justify-center items-center w-full gap-4">
        <Tooltip content="Prompt" placement="right" color="primary">
          <Button
            isIconOnly
            color="primary"
            aria-label="Prompt"
            onPress={promptsModalOpen}
          >
            <TbPrompt className="text-xl" />
          </Button>
        </Tooltip>

        <Tooltip content="Settings" placement="right" color="primary">
          <Button
            isIconOnly
            color="primary"
            aria-label="Settings"
            onPress={attributesModalOpen}
          >
            <TbSettings className="text-xl" />
          </Button>
        </Tooltip>

        <Tooltip content="History" placement="right" color="primary">
          <Button
            isIconOnly
            color="primary"
            aria-label="History"
            onPress={conversationHistoriesModalOpen}
          >
            <TbHistory className="text-xl" />
          </Button>
        </Tooltip>
      </div>
      <div></div>
    </aside>
  );
};

"use client";
import { Button } from "@nextui-org/react";
import { TbPrompt } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { useAttributesModal } from "./attributes-modal";
export const AttributeSidebar = () => {
  const { handleModalOpen } = useAttributesModal();
  return (
    <aside className="flex flex-col justify-center items-center w-16 gap-4">
      <Button isIconOnly color="primary" aria-label="Prompt">
        <TbPrompt className="text-xl" />
      </Button>

      <Button
        isIconOnly
        color="primary"
        aria-label="Settings"
        onPress={handleModalOpen}
      >
        <TbSettings className="text-xl" />
      </Button>
    </aside>
  );
};

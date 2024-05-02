"use client";
import { Button } from "@nextui-org/react";
import { TbPrompt } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { TbHistory } from "react-icons/tb";
import { useAttributesModal } from "./attributes-modal";
import Image from "next/image";
import Logo from "@/assets/images/wallbouncing.png";

export const AttributeSidebar = () => {
  const { handleModalOpen } = useAttributesModal();
  return (
    <aside className="flex flex-col justify-between items-center w-16 gap-4 h-screen">
      <div className="mt-4">
        <Button isIconOnly aria-label="WallBouncing" variant="bordered">
          <Image src={Logo} alt="WallBouncing" />
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
          onPress={handleModalOpen}
        >
          <TbSettings className="text-xl" />
        </Button>
        <Button isIconOnly color="primary" aria-label="History">
          <TbHistory className="text-xl" />
        </Button>
      </div>
      <div></div>
    </aside>
  );
};

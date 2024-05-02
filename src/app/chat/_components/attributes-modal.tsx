"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { FC } from "react";

const attributesModalOpenAtom = atom(false);

export function useAttributesModal() {
  const setAttributesModalOpen = useSetAtom(attributesModalOpenAtom);

  const handleModalOpen = () => {
    setAttributesModalOpen(true);
  };

  const handleModalClose = () => {
    setAttributesModalOpen(false);
  };

  return { handleModalOpen, handleModalClose };
}

type AttributesModalProps = {};

export const AttributesModal: FC<AttributesModalProps> = () => {
  const isOpen = useAtomValue(attributesModalOpenAtom);
  const { handleModalClose } = useAttributesModal();

  return (
    <Modal size={"4xl"} isOpen={isOpen} onClose={handleModalClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                aliqua enim laboris do dolor eiusmod.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

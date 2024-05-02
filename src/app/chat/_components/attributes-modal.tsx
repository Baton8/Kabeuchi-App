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
import { Age } from "./settings/age";
import { CommunicationStyle } from "./settings/communication-style";
import { Education } from "./settings/education";
import { FamilyStructure } from "./settings/family-structure";
import { Gender } from "./settings/gender";
import { Income } from "./settings/income";
import { JobHistory } from "./settings/job-history";
import { JobTitle } from "./settings/job-title";
import { JobPosition } from "./settings/position";
import { Residence } from "./settings/residence";
import { SkillSet } from "./settings/skill-set";

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
            <ModalHeader className="flex flex-col gap-1">設定</ModalHeader>
            <ModalBody>
              <Age />
              <Education />
              <CommunicationStyle />
              <FamilyStructure />
              <Gender />
              <Income />
              <JobHistory />
              <JobTitle />
              <JobPosition />
              <Residence />
              <SkillSet />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                閉じる
              </Button>
              <Button color="primary" onPress={onClose}>
                保存
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

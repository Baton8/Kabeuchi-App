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
import { type FC } from "react";
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
import { useAttributes } from "../_hooks/use-attributes";

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

export const AttributesModal: FC = () => {
  const isOpen = useAtomValue(attributesModalOpenAtom);
  const { reset } = useAttributes();
  const { handleModalClose } = useAttributesModal();

  return (
    <Modal size={"4xl"} isOpen={isOpen} onClose={handleModalClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">設定</ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-2 gap-4">
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
              </div>
              <div>
                <Button color="warning" onPress={reset}>
                  Reset
                </Button>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                閉じる
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

import { AttributeSidebar } from "./_components/attributes-sidebar";
import { Age } from "./_components/settings/age";
import { CommunicationStyle } from "./_components/settings/communication-style";
import { Education } from "./_components/settings/education";
import { FamilyStructure } from "./_components/settings/family-structure";
import { Gender } from "./_components/settings/gender";
import { Income } from "./_components/settings/income";
import { JobHistory } from "./_components/settings/job-history";
import { JobTitle } from "./_components/settings/job-title";
import { JobPosition } from "./_components/settings/position";
import { Personality } from "./_components/settings/presonality";
import { Residence } from "./_components/settings/residence";
import { SkillSet } from "./_components/settings/skill-set";
import { AttributesModal } from "./_components/attributes-modal";
import { ChatContainer } from "./_components/chat-container";
import { Divider } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="flex flex-row h-screen items-center justify-center">
      <AttributeSidebar />
      <AttributesModal />
      <Divider orientation="vertical" className="h-[90%]" />
      <main className="w-full">
        <ChatContainer />
      </main>
    </div>
  );
}

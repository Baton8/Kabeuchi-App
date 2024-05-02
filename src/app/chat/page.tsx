import { AttributeSidebar } from "./_components/attributes-sidebar";
import { Age } from "./_components/age";
import { CommunicationStyle } from "./_components/communication-style";
import { Education } from "./_components/education";
import { FamilyStructure } from "./_components/family-structure";
import { Gender } from "./_components/gender";
import { Income } from "./_components/income";
import { JobHistory } from "./_components/job-history";
import { JobTitle } from "./_components/job-title";
import { JobPosition } from "./_components/position";
import { Personality } from "./_components/presonality";
import { Residence } from "./_components/residence";
import { SkillSet } from "./_components/skill-set";
import { AttributesModal } from "./_components/attributes-modal";

export default function Page() {
  return (
    <div className="flex flex-row">
      <AttributeSidebar />
      <AttributesModal />
      <main className="w-full">
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
      </main>
    </div>
  );
}

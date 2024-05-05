import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
type Attributes = {
  age: string;
  education: string;
  communicationStyle: string;
  familyStructure: string;
  gender: string;
  income: string;
  jobHistory: string;
  jobTitle: string;
  jobPosition: string;
  residence: string;
  skillSet: string;
};
const attribuesAtom = atomWithStorage<Attributes>("attributes", {
  age: "",
  education: "",
  communicationStyle: "",
  familyStructure: "",
  gender: "",
  income: "",
  jobHistory: "",
  jobTitle: "",
  jobPosition: "",
  residence: "",
  skillSet: "",
});

export const useAttributes = () => {
  const [attributes, setAttributes] = useAtom(attribuesAtom);

  const reset = () => {
    setAttributes({
      age: "",
      education: "",
      communicationStyle: "",
      familyStructure: "",
      gender: "",
      income: "",
      jobHistory: "",
      jobTitle: "",
      jobPosition: "",
      residence: "",
      skillSet: "",
    });
  };

  return { attributes, setAttributes, reset };
};

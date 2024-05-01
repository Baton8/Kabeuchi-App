"use client";

import { Select, SelectItem } from "@nextui-org/react";

type FamilyStructure = {
  name: string;
};

const familyStructures: FamilyStructure[] = [
  { name: "単身" },
  { name: "核家族（両親と子）" },
  { name: "大家族：一人の兄弟姉妹" },
  { name: "大家族：複数の兄弟姉妹" },
  { name: "単親家庭" },
];
export const FamilyStructure = () => {
  return (
    <div>
      <h1>家族構成</h1>
      <Select label="家族構成" className="max-w-xs">
        {familyStructures.map((familyStructure) => (
          <SelectItem key={familyStructure.name} value={familyStructure.name}>
            {familyStructure.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

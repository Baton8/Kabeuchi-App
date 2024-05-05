"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useState, useEffect, type ChangeEventHandler } from "react";
import { useAttributes } from "../../_hooks/use-attributes";

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
  const [value, setValue] = useState<string>("");

  const { attributes, setAttributes } = useAttributes();

  const defaultFamilyStructure = familyStructures.find(
    (familyStructure) => familyStructure.name === attributes.familyStructure
  );

  useEffect(() => {
    if (defaultFamilyStructure) {
      setValue(defaultFamilyStructure.name);
    }
  }, [defaultFamilyStructure]);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
    setAttributes({ ...attributes, familyStructure: e.target.value });
  };

  return (
    <div>
      <Select
        label="家族構成"
        className="max-w-xs"
        selectedKeys={[value]}
        onChange={handleChange}
      >
        {familyStructures.map((familyStructure) => (
          <SelectItem key={familyStructure.name} value={familyStructure.name}>
            {familyStructure.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

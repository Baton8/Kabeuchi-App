"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { type ChangeEventHandler, useEffect, useState } from "react";
import { useAttributes } from "../../_hooks/use-attributes";

type Residence = {
  name: string;
};

const residences: Residence[] = [
  { name: "北海道" },
  { name: "東北" },
  { name: "関東" },
  { name: "中部" },
  { name: "近畿" },
  { name: "中国" },
  { name: "四国" },
  { name: "九州" },
  { name: "沖縄" },
];

export const Residence = () => {
  const [value, setValue] = useState<string>("");

  const { attributes, setAttributes } = useAttributes();

  const defaultResidence = residences.find(
    (residence) => residence.name === attributes.residence
  );

  useEffect(() => {
    if (defaultResidence) {
      setValue(defaultResidence.name);
    }

    return () => {
      setValue("");
    };
  }, [defaultResidence, attributes.residence]);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
    setAttributes({ ...attributes, residence: e.target.value });
  };

  return (
    <div>
      <Select
        label="居住地域"
        className="max-w-xs"
        selectedKeys={[value]}
        onChange={handleChange}
      >
        {residences.map((residence) => (
          <SelectItem key={residence.name} value={residence.name}>
            {residence.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

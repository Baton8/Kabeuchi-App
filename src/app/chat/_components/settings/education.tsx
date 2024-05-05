"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { useState, useEffect, type ChangeEventHandler } from "react";
import { useAttributes } from "../../_hooks/use-attributes";

type Education = {
  name: string;
};
const educations = [
  { name: "中学校卒" },
  { name: "高校卒" },
  { name: "大学卒" },
  { name: "大学院卒" },
  { name: "その他" },
];

export const Education = () => {
  const [value, setValue] = useState<string>("");

  const { attributes, setAttributes } = useAttributes();

  const defaultEducation = educations.find(
    (education) => education.name === attributes.education
  );

  useEffect(() => {
    if (defaultEducation) {
      setValue(defaultEducation.name);
    }
  }, [defaultEducation]);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
    setAttributes({ ...attributes, education: e.target.value });
  };

  return (
    <div>
      <Select
        label="学歴"
        className="max-w-xs"
        selectedKeys={[value]}
        onChange={handleChange}
      >
        {educations.map((education) => (
          <SelectItem key={education.name} value={education.name}>
            {education.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

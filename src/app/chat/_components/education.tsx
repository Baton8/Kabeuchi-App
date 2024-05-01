"use client";
import { Select, SelectItem } from "@nextui-org/react";

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
  return (
    <div>
      <h1>学歴</h1>
      <Select label="学歴" className="max-w-xs">
        {educations.map((education) => (
          <SelectItem key={education.name} value={education.name}>
            {education.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

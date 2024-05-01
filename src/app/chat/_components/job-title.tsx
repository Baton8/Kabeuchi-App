"use client";

import { Select, SelectItem } from "@nextui-org/react";

type JobTitle = {
  name: string;
};

const jobTitles: JobTitle[] = [
  { name: "教員" },
  { name: "医者" },
  { name: "弁護士" },
  { name: "エンジニア" },
  { name: "経営者" },
  { name: "人事" },
  { name: "営業" },
  { name: "作家" },
  { name: "工芸家" },
  { name: "建築家" },
  { name: "農家" },
  { name: "美容師" },
  { name: "ウェディングプランナー" },
];
export const JobTitle = () => {
  return (
    <div>
      <h1>職種</h1>
      <Select label="職種" className="max-w-xs">
        {jobTitles.map((jt) => (
          <SelectItem key={jt.name} value={jt.name}>
            {jt.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

"use client";
import { Select, SelectItem } from "@nextui-org/react";

type JobHistory = {
  name: string;
};

const jobHistories: JobHistory[] = [
  { name: "3年未満" },
  { name: "5年以上" },
  { name: "10年以上" },
  { name: "15年以上" },
  { name: "20年以上" },
];

export const JobHistory = () => {
  return (
    <div>
      <Select label="職歴" className="max-w-xs">
        {jobHistories.map((jh) => (
          <SelectItem key={jh.name} value={jh.name}>
            {jh.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

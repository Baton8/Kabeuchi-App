"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState, type ChangeEventHandler } from "react";
import { useAttributes } from "../../_hooks/use-attributes";

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
  const [value, setValue] = useState<string>("");

  const { attributes, setAttributes } = useAttributes();

  const defaultJobTitle = jobTitles.find(
    (jobTitle) => jobTitle.name === attributes.jobTitle
  );

  useEffect(() => {
    if (defaultJobTitle) {
      setValue(defaultJobTitle.name);
    }

    return () => {
      setValue("");
    };
  }, [defaultJobTitle, attributes.jobTitle]);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
    setAttributes({ ...attributes, jobTitle: e.target.value });
  };

  return (
    <div>
      <Select
        label="職種"
        className="max-w-xs"
        selectedKeys={[value]}
        onChange={handleChange}
      >
        {jobTitles.map((jt) => (
          <SelectItem key={jt.name} value={jt.name}>
            {jt.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

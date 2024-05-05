"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { type ChangeEventHandler, useEffect, useState } from "react";
import { useAttributes } from "../../_hooks/use-attributes";

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
  const [value, setValue] = useState<string>("");

  const { attributes, setAttributes } = useAttributes();

  const defaultJobHistory = jobHistories.find(
    (jobHistory) => jobHistory.name === attributes.jobHistory
  );

  useEffect(() => {
    if (defaultJobHistory) {
      setValue(defaultJobHistory.name);
    }

    return () => {
      setValue("");
    };
  }, [defaultJobHistory, attributes.jobHistory]);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
    setAttributes({ ...attributes, jobHistory: e.target.value });
  };

  return (
    <div>
      <Select
        label="職歴"
        className="max-w-xs"
        selectedKeys={[value]}
        onChange={handleChange}
      >
        {jobHistories.map((jh) => (
          <SelectItem key={jh.name} value={jh.name}>
            {jh.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

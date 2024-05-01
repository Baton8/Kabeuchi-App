"use client";
import { Select, SelectItem } from "@nextui-org/react";

type Age = {
  value: string;
  label: string;
};

const ages: Age[] = [
  {
    value: "10代",
    label: "10代",
  },
  {
    value: "20代",
    label: "20代",
  },
  {
    value: "30代",
    label: "30代",
  },
  {
    value: "40代",
    label: "40代",
  },
  {
    value: "50代",
    label: "50代",
  },
  {
    value: "60代",
    label: "60代",
  },
  {
    value: "70代",
    label: "70代",
  },
];
export const Age = () => {
  return (
    <div>
      <Select label="年齢" className="max-w-xs">
        {ages.map((age) => (
          <SelectItem key={age.value} value={age.value}>
            {age.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

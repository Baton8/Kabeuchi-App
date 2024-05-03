"use client";
import { Select, SelectItem } from "@nextui-org/react";

type Age = {
  name: string;
};

const ages: Age[] = [
  {
    name: "10代",
  },
  {
    name: "20代",
  },
  {
    name: "30代",
  },
  {
    name: "40代",
  },
  {
    name: "50代",
  },
  {
    name: "60代",
  },
  {
    name: "70代",
  },
];
export const Age = () => {
  return (
    <div>
      <Select label="年齢" className="max-w-xs">
        {ages.map((age) => (
          <SelectItem key={age.name} value={age.name}>
            {age.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

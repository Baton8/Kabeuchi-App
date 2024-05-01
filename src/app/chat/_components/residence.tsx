"use client";
import { Select, SelectItem } from "@nextui-org/react";

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
  return (
    <div>
      <Select label="居住地域" className="max-w-xs">
        {residences.map((residence) => (
          <SelectItem key={residence.name} value={residence.name}>
            {residence.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

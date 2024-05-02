"use client";
import { Select, SelectItem } from "@nextui-org/react";

type Gender = {
  name: string;
};

const genders = [{ name: "男性" }, { name: "女性" }, { name: "その他" }];

export const Gender = () => {
  return (
    <div>
      <Select label="性別" className="max-w-xs">
        {genders.map((gender) => (
          <SelectItem key={gender.name} value={gender.name}>
            {gender.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

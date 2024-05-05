"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { type ChangeEventHandler, useEffect, useState } from "react";
import { useAttributes } from "../../_hooks/use-attributes";

type Gender = {
  name: string;
};

const genders = [{ name: "男性" }, { name: "女性" }, { name: "その他" }];

export const Gender = () => {
  const [value, setValue] = useState<string>("");

  const { attributes, setAttributes } = useAttributes();

  const defaultGender = genders.find(
    (gender) => gender.name === attributes.gender
  );

  useEffect(() => {
    if (defaultGender) {
      setValue(defaultGender.name);
    }
  }, [defaultGender]);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
    setAttributes({ ...attributes, gender: e.target.value });
  };
  return (
    <div>
      <Select
        label="性別"
        className="max-w-xs"
        selectedKeys={[value]}
        onChange={handleChange}
      >
        {genders.map((gender) => (
          <SelectItem key={gender.name} value={gender.name}>
            {gender.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState, type ChangeEventHandler } from "react";
import { useAttributes } from "../../_hooks/use-attributes";

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
  const [value, setValue] = useState<string>("");

  const { attributes, setAttributes } = useAttributes();

  const defaultAge = ages.find((age) => age.name === attributes.age);

  useEffect(() => {
    if (defaultAge) {
      setValue(defaultAge.name);
    }
  }, [defaultAge]);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
    setAttributes({ ...attributes, age: e.target.value });
  };

  console.log("attributes", attributes);

  return (
    <div>
      <Select
        label="年齢"
        className="max-w-xs"
        selectedKeys={[value]}
        onChange={handleChange}
      >
        {ages.map((age) => (
          <SelectItem key={age.name} value={age.name}>
            {age.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

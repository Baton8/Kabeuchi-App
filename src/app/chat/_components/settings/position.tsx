"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { type ChangeEventHandler, useEffect, useState } from "react";
import { useAttributes } from "../../_hooks/use-attributes";

type Position = {
  name: string;
};

const positions: Position[] = [
  { name: "一般社員" },
  { name: "課長:マネジメント経験" },
  { name: "部長:決裁権有" },
  { name: "取締役:経営方針への発言権有" },
  { name: "代表：最終意思決定者" },
];
export const JobPosition = () => {
  const [value, setValue] = useState<string>("");

  const { attributes, setAttributes } = useAttributes();

  const defaultJobPosition = positions.find(
    (position) => position.name === attributes.jobPosition
  );

  useEffect(() => {
    if (defaultJobPosition) {
      setValue(defaultJobPosition.name);
    }
  }, [defaultJobPosition]);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
    setAttributes({ ...attributes, jobPosition: e.target.value });
  };

  return (
    <div>
      <Select
        label="役職"
        className="max-w-xs"
        selectedKeys={[value]}
        onChange={handleChange}
      >
        {positions.map((jt) => (
          <SelectItem key={jt.name} value={jt.name}>
            {jt.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

"use client";
import { Select, SelectItem } from "@nextui-org/react";

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
  return (
    <div>
      <h1>役職</h1>
      <Select label="役職" className="max-w-xs">
        {positions.map((jt) => (
          <SelectItem key={jt.name} value={jt.name}>
            {jt.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

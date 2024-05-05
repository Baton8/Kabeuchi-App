"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { type ChangeEventHandler, useEffect, useState } from "react";
import { useAttributes } from "../../_hooks/use-attributes";

type Income = {
  name: string;
};

const incomes: Income[] = [
  { name: "200万以下" },
  { name: "200万〜300万" },
  { name: "300万〜400万" },
  { name: "400万〜500万" },
  { name: "500万〜600万" },
  { name: "600万〜800万" },
  { name: "800万〜1000万" },
  { name: "1000万〜1200万" },
  { name: "1200万〜1500万" },
  { name: "1500万〜2000万" },
  { name: "2000万以上" },
];
export const Income = () => {
  const [value, setValue] = useState<string>("");

  const { attributes, setAttributes } = useAttributes();

  const defaultIncome = incomes.find(
    (income) => income.name === attributes.income
  );

  useEffect(() => {
    if (defaultIncome) {
      setValue(defaultIncome.name);
    }

    return () => {
      setValue("");
    };
  }, [defaultIncome, attributes.income]);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue(e.target.value);
    setAttributes({ ...attributes, income: e.target.value });
  };

  return (
    <div>
      <Select
        label="所得"
        className="max-w-xs"
        selectedKeys={[value]}
        onChange={handleChange}
      >
        {incomes.map((income) => (
          <SelectItem key={income.name} value={income.name}>
            {income.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

import { Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useAttributes } from "../../_hooks/use-attributes";

export const SkillSet = () => {
  const [value, setValue] = useState<string>("");
  const { attributes, setAttributes } = useAttributes();

  useEffect(() => {
    if (attributes.skillSet) {
      setValue(attributes.skillSet);
    }

    return () => {
      setValue("");
    };
  }, [attributes.skillSet, setValue]);

  const handleChange = (value: string) => {
    setValue(value);
    setAttributes({ ...attributes, skillSet: value });
  };

  return (
    <div>
      <Textarea
        label="スキルセット"
        className="max-w-xs"
        value={value}
        onValueChange={handleChange}
      />
    </div>
  );
};

import { Button, Textarea } from "@nextui-org/react";
import { FC } from "react";

export const Form: FC = () => {
  return (
    <form className="w-full flex flex-row items-center gap-4 px-4 pb-8">
      <Textarea></Textarea>
      <Button color="primary">送信</Button>
    </form>
  );
};

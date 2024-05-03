import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Textarea } from "@nextui-org/react";
import { FC } from "react";

type Inputs = {
  message: string;
};

export const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="w-full flex flex-row items-center gap-4 px-4 pb-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Textarea {...register("message", { required: true })}></Textarea>
      <Button color="primary" type="submit">
        送信
      </Button>
    </form>
  );
};

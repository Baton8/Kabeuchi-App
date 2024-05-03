import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Textarea } from "@nextui-org/react";
import { FC } from "react";
import { useCurrentChatId } from "../../_hooks/use-current-chat-id";
import { api } from "@/trpc/react";

type Inputs = {
  message: string;
};

export const Form: FC = () => {
  const { currentChatId } = useCurrentChatId();
  const messageMutation = api.message.create.useMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!currentChatId) return;

    messageMutation.mutate({
      chatId: currentChatId,
      message: data.message,
    });
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

import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Textarea } from "@nextui-org/react";
import { FC } from "react";
import { useCurrentChatId } from "../../_hooks/use-current-chat-id";
import { api } from "@/trpc/react";
import { useMessages } from "../../_hooks/use-message";

type Inputs = {
  message: string;
};

export const Form: FC = () => {
  const { currentChatId } = useCurrentChatId();
  const { addMessage } = useMessages();
  const messageMutation = api.message.create.useMutation({
    onMutate: (data) => {
      addMessage({ role: "user", message: data.message });
    },
    onSuccess: (data) => {
      addMessage(data);
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!currentChatId) return;

    messageMutation.mutate({
      chatId: currentChatId,
      message: data.message,
    });

    reset();
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

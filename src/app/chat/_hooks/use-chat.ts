import { api } from "@/trpc/react";

export function useChat() {
  const createMutation = api.chat.create.useMutation();

  const create = async () => {
    createMutation.mutate();
  };

  return {
    create,
  };
}

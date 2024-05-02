import { api } from "@/trpc/react";

export function useChat() {
  const createMutation = api.chat.create.useMutation();
  const { data, isLoading } = api.chat.findAll.useQuery({
    options: {
      sort: {
        field: "createdAt",
        order: "desc",
      },
      pagination: {
        offset: 1,
        limit: 10,
      },
      conditions: {},
    },
  });

  const create = async () => {
    createMutation.mutate();
  };

  return {
    data,
    isLoading,
    create,
  };
}

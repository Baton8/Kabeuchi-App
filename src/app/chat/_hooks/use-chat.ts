import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

export function useChat() {
  const router = useRouter();
  const createMutation = api.chat.create.useMutation({
    onSuccess(data) {
      router.push(`/chat?id=${data.id}`);
    },
  });

  const { data, isLoading } = api.chat.findAll.useQuery({
    options: {
      sort: {
        field: "createdAt",
        order: "desc",
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

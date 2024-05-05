import { env } from "@/env";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

type Messages = OpenAI.Chat.Completions.ChatCompletionMessageParam[];

export async function createChat(messages: Messages): Promise<string> {
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 1,
    max_tokens: 512,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return res.choices[0]?.message?.content ?? "";
}

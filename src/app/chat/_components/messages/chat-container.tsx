import { Form } from "./form";
import { Message, MessageBubble } from "./message-bubble";

const exampleMessages: Message[] = [
  { role: "user", message: "こんにちは、元気ですか？" },
  {
    role: "ai",
    message: "私はAIなので感情はありませんが、お手伝いできますよ！",
  },
  { role: "user", message: "今日はどんな天気ですか？" },
  { role: "ai", message: "今日は晴れで、最高気温は25°Cです。" },
  { role: "user", message: "ありがとう！" },
  { role: "ai", message: "どういたしまして！他に何かお手伝いできますか？" },
  {
    role: "user",
    message:
      "天気のこと以外にも聞きたいことがあります。今日は友人と一緒に遊びに行こうと思っていますが、どこに行くのが良いか、AIの意見を教えてください。",
  },
  {
    role: "ai",
    message:
      "それは素晴らしいアイデアですね！お友達と一緒に行けるおすすめの場所としては、近くの公園や、美術館などが挙げられます。ご興味があるならば、具体的な場所をもう少し教えていただけますか？",
  },
  { role: "user", message: "こんにちは、元気ですか？" },
  {
    role: "ai",
    message: "私はAIなので感情はありませんが、お手伝いできますよ！",
  },
  { role: "user", message: "今日はどんな天気ですか？" },
  { role: "ai", message: "今日は晴れで、最高気温は25°Cです。" },
  { role: "user", message: "ありがとう！" },
  { role: "ai", message: "どういたしまして！他に何かお手伝いできますか？" },
  {
    role: "user",
    message:
      "天気のこと以外にも聞きたいことがあります。今日は友人と一緒に遊びに行こうと思っていますが、どこに行くのが良いか、AIの意見を教えてください。",
  },
  {
    role: "ai",
    message:
      "それは素晴らしいアイデアですね！お友達と一緒に行けるおすすめの場所としては、近くの公園や、美術館などが挙げられます。ご興味があるならば、具体的な場所をもう少し教えていただけますか？",
  },
];

export const ChatContainer = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-full flex flex-col justify-start items-start overflow-y-scroll py-2">
        {exampleMessages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
      </div>
      <div className="w-full pt-4">
        <Form />
      </div>
    </div>
  );
};

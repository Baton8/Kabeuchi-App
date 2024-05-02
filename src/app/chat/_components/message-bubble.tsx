import { FC } from "react";
import { TbRobotFace } from "react-icons/tb";
import { FiUser } from "react-icons/fi";

export type Message = {
  role: "user" | "ai";
  message: string;
};

type MessageBubbleProps = {
  message: Message;
};
export const MessageBubble: FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === "user";
  const { message: messageText } = message;

  return (
    <div className="w-full flex flex-row justify-start items-center gap-2 px-2 py-4">
      <div className="text-3xl bg-slate-600 text-white p-1 rounded-lg">
        {isUser ? <FiUser /> : <TbRobotFace />}
      </div>
      <div className="w-[90%]">{messageText}</div>
    </div>
  );
};

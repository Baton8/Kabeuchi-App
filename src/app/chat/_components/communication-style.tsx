"use client";
import { Select, SelectItem } from "@nextui-org/react";

type Style = {
  name: string;
  description: string;
};

const styles: Style[] = [
  {
    name: "外交的",
    description: "外交的な人は、他の人とのコミュニケーションが得意です。",
  },
  {
    name: "内向的",
    description: "内向的な人は、他の人とのコミュニケーションが苦手です。",
  },
  {
    name: "協調的",
    description: "協調的な人は、他の人とのコミュニケーションが円滑です。",
  },
  {
    name: "非協調的",
    description: "非協調的な人は、他の人とのコミュニケーションが難しいです。",
  },
  {
    name: "開放性が高い",
    description: "開放性が高い人は、新しいことに興味を持ちます。",
  },
  {
    name: "開放性が低い",
    description: "開放性が低い人は、新しいことに興味を持ちません。",
  },
  {
    name: "誠実的",
    description: "誠実的な人は、他の人に対して誠実です。",
  },
  {
    name: "不誠実",
    description: "不誠実な人は、他の人に対して不誠実です。",
  },
  {
    name: "神経質",
    description: "神経質な人は、他の人に対して神経質です。",
  },
  {
    name: "マイペース",
    description: "マイペースな人は、自分のペースで物事を進めます。",
  },
  {
    name: "好奇心が強い",
    description: "好奇心が強い人は、新しいことに興味を持ちます。",
  },
  {
    name: "好奇心が低い",
    description: "好奇心が低い人は、新しいことに興味を持ちません。",
  },
  {
    name: "楽観的",
    description: "楽観的な人は、物事を前向きに考えます。",
  },
  {
    name: "悲観的",
    description: "悲観的な人は、物事を後ろ向きに考えます。",
  },
  {
    name: "競争的",
    description: "競争的な人は、他の人と競争します。",
  },
  {
    name: "非競争的",
    description: "非競争的な人は、他の人と競争しません。",
  },
  {
    name: "自己効力感が高い",
    description: "自己効力感が高い人は、自分に自信を持っています。",
  },
  {
    name: "自己効力感が低い",
    description: "自己効力感が低い人は、自分に自信がありません。",
  },
  {
    name: "自己中心的",
    description: "自己中心的な人は、自分のことしか考えません。",
  },
  {
    name: "利他的",
    description: "利他的な人は、他の人のことを考えます。",
  },
  {
    name: "創造的",
    description: "創造的な人は、新しいアイデアを出します。",
  },
  {
    name: "非創造的",
    description: "非創造的な人は、新しいアイデアを出しません。",
  },
  {
    name: "倫理的",
    description: "倫理的な人は、他の人に対して倫理的です。",
  },
  {
    name: "非倫理的",
    description: "非倫理的な人は、他の人に対して非倫理的です。",
  },
  {
    name: "積極的",
    description: "積極的な人は、物事を前向きに進めます。",
  },
  {
    name: "消極的",
    description: "消極的な人は、物事を後ろ向きに進めます。",
  },
];

export const CommunicationStyle = () => {
  return (
    <div>
      <h1>コミュニケーションスタイル</h1>
      <Select label="コミュニケーションスタイル" className="max-w-xs">
        {styles.map((age) => (
          <SelectItem key={age.name} value={age.name}>
            {age.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

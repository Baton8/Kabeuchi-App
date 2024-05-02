import "@/styles/globals.css";

import { Zen_Kaku_Gothic_New } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Providers } from "./_components/providers";

const font = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Chat with GPT-3.5 Turbo",
  description: "Chat with GPT-3.5 Turbo in your browser",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={font.className}>
        <TRPCReactProvider>
          <Providers>{children}</Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

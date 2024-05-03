import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
import { Button } from "@nextui-org/react";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="w-full h-screen">
      <div className="w-full flex flex-col justify-center items-center gap-4 h-full">
        <p className="text-2xl font-bold">
          壁打ちアプリケーションのサンプルです。
          <br />
          ログインしてください。
        </p>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <p>
            {session && (
              <>
                <span>現在ログインしているユーザー:</span>
                <span className="font-bold">{session.user?.name}</span>
              </>
            )}
          </p>
          <Link href={"/chat"}>
            <Button color="primary" size="lg" className="font-bold">
              Go to Chat
            </Button>
          </Link>
          <Button
            color={session ? "default" : "primary"}
            size={session ? "md" : "lg"}
            className={session ? "text-md" : "text-lg"}
          >
            <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
              {session ? "Sign out" : "Sign in"}
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

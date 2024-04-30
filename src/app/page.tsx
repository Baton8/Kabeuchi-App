import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="bg-slate-100 h-screen">
      <div>
        <div>
          <div>
            <p>{session && <span>Logged in as {session.user?.name}</span>}</p>
            <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>
        <p className="text-white">
          Get started by reading the{" "}
          <a href="https://create.t3.gg/en/usage/first-steps">hogheoge</a>{" "}
          guide.
        </p>
      </div>
    </main>
  );
}

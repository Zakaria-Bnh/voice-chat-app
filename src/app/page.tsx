import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <div className="w-full ">
        <div className="text-center text-4xl font-bold">welcome home bitch</div>
        <h2>you are sign in as {session.user?.name}</h2>
      </div>
      <form action={async () => {
        "use server";
        await signOut();
      }}>
        <button type="submit">Sign out</button>
      </form>
    </>
  );
}

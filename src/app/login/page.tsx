import { signIn } from "@/auth";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function SignIn() {
  const session = await auth();

  if (session) {
    redirect("/"); // or wherever you want to send them
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
      className="w-full text-center bg-black text-white"
    >
      <Link href={"/"}>Home page</Link>
      <p>You are not signed in. Please sign in:</p>
      <button type="submit">Sign in</button>
    </form>
  );
}

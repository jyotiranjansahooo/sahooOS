import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminLoginPage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/admin");
  }

  return (
    <main className="min-h-screen bg-black text-green-400 flex items-center justify-center px-6">
      <div className="w-full max-w-md border-4 border-green-500 p-8 rounded-lg shadow-[0_0_30px_rgba(34,197,94,0.4)]">

        <h1 className="text-4xl font-bold text-center mb-4">
          BOOTING SAHOO
        </h1>

        <p className="text-center text-sm text-green-300 mb-8">
          Administrator Access Only
        </p>

        <SignInButton forceRedirectUrl="/admin">
          <button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded transition">
            Continue with Google
          </button>
        </SignInButton>

        <p className="text-center text-xs mt-6 text-green-500">
          Unauthorized users will be denied access.
        </p>

      </div>
    </main>
  );
}
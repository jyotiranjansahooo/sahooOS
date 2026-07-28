import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen font-serif font-extrabold items-center justify-center bg-black">
<SignIn
  routing="path"
  path="/sign-in"
  forceRedirectUrl="/admin"
/>    </div>
  );
}
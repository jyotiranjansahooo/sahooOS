import { currentUser } from "@clerk/nextjs/server";

export async function isAdmin() {
  const user = await currentUser();

  if (!user) return false;

  const email = user.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId
  )?.emailAddress;

  return email === process.env.ADMIN_EMAIL;
}
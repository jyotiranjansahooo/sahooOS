import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
subject: `🚀 TEST ${Date.now()}`;
export default async function sendMail({ name, email, subject, message }) {
  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `📩 sahoo-OS | ${subject} ${Date.now()}`,
    html: `
      <h2>New Portfolio Contact</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>

      <hr/>

      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

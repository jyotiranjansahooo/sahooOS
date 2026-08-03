import nodemailer from "nodemailer";

export default async function sendMail({ name, email, subject, message }) {

  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 Portfolio Contact | ${subject}`,
      html: `
      <h2>New Portfolio Contact</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>

      <hr/>

      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
    });

  } catch (err) {
    console.error("sendMail error:");
    console.error(err);
    throw err;
  }
}

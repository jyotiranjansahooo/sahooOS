import validator from "validator";
import sendMail from "../utils/sendMail.js";

export const sendContact = async (req, res) => {
 try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Invalid email.",
      });
    }

    await sendMail({
      name,
      email,
      subject,
      message,
    });

    res.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
  console.error(err);

  res.status(500).json({
    success: false,
    error: err.message,
    full: err,
  });
}
};

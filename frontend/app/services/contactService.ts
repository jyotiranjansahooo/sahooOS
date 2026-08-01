import axios from "axios";

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactMessage(
  data: ContactData
) {
  const response = await axios.post(
    "http://localhost:5000/api/contact",
    data
  );

  return response.data;
}
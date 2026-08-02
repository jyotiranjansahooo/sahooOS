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
  `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
  data
);

  return response.data;
}
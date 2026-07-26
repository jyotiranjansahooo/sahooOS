import bcrypt from "bcryptjs";

const password = "YourStrongPassword123";

const generateHash = async () => {
  const hash = await bcrypt.hash(password, 10);
  console.log(hash);
};

generateHash();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";


const app = express();

app.use(cors({ origin: "http://localhost:3001", credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BootingSahoo API is running 🚀",
  });
});

export default app;

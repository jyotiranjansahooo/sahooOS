import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
app.use("/api/projects", projectRoutes);
app.use("/api/dashboard", dashboardRoutes);
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
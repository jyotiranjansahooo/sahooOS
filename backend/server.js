import dotenv from "dotenv";

dotenv.config(); // MUST be first

import app from "./app.js";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const PORT = process.env.PORT || 5000;

app.use("/api/projects", projectRoutes);
app.use("/api/dashboard", dashboardRoutes);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
     console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();

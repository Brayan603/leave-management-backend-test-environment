// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // your MongoDB connection
import morgan from "morgan";


// Routes
import authRoutes from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import orgRoutes from "./routes/org.routes.js";
import leaveTypeRoutes from "./routes/LeaveType.routes.js";
import departmentRoutes from "./routes/department.routes.js";

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

app.use(morgan("dev")); // logs to console

// Middleware
app.use(cors());
app.use(express.json());

// Test root route
app.get("/", (req, res) => {
  res.send("API running successfully!");
});

// API Routes  // netstat -ano | findstr :5000  // taskkill /PID 12345 /F

app.use("/api/organizations", orgRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRouter);
app.use("/api/leavetypes", leaveTypeRoutes);
app.use("/api/department", departmentRoutes);


// Catch-all route for 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

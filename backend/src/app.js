import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";

import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server); // Assuming this sets up your socket logic

// PORT
const PORT = process.env.PORT || 8000;
app.set("port", PORT);

// Middlewares
app.use(cors({
  origin: "https://converzia-frontend.onrender.com", // Allow frontend URL
}));
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));

// Routes
app.use("/api/v1/users", userRoutes);

// Start server
const start = async () => {
  try {
    const connectionDb = await mongoose.connect("mongodb+srv://ds1731018:mFZ1wEhKr55kqDMD@cluster0.q2p0kzd.mongodb.net/mooz");
    console.log(`✅ MongoDB Connected: ${connectionDb.connection.host}`);

    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Stop the app if DB fails
  }
};

start();

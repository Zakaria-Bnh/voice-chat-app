import mongoose from "mongoose";

const mongodbUri = process.env.MONGODB_URI;

export const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(mongodbUri!);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
await dbConnect()

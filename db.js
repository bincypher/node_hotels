import mongoose from "mongoose";

const mongoURL = "mongodb://127.0.0.1:27017/hotels";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};
 
export default connectDB;
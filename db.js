import mongoose from "mongoose";

const mongoURL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/hotels";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("✅ MongoDB Connected Successfully");
    console.log(`📍 Database: ${mongoURL.includes('mongodb+srv') ? 'MongoDB Atlas (Cloud)' : 'Local MongoDB'}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    console.error("⚠️  Make sure MongoDB is running or check your MONGODB_URL in .env");
    process.exit(1);
  }
};

export default connectDB;
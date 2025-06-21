import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/inkspire")
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((e) => console.log("MongoDB connection error: ", e));
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

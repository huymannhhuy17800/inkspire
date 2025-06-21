import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    img: {
      type: String,
    },
    savedPost: {
      type: [String],
      default: [], // default is emmty
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

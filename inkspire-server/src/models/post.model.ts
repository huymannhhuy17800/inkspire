import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IModel {
  user: Schema.Types.ObjectId;
  title: string;
  img: string;
  slug: string;
  desc: string;
  isFeatured: boolean;
  visit: boolean;
  createdAt: Date;
  updatedAt: Date;
}
const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: Boolean,
      default: 0,
    },
  },
  { timestamps: true, collection: "post" }
);

export const Post = mongoose.model<IModel>("Post", postSchema);

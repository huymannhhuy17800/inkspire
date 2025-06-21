import { Request, Response } from "express";
import { Post } from "../models/post.model";
import { sendResponse } from "../utils/send-response";
import { StatusCode } from "../utils/status-code";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    sendResponse(res, "Get All Posts Success", posts, StatusCode.OK);
  } catch (error) {
    sendResponse(
      res,
      "Get Posts Failed",
      null,
      StatusCode.INTERNAL_SERVER_ERROR
    );
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const post = Post.findOne({ slug: req.params.slug });
    sendResponse(res, "Get Post Success", post, StatusCode.OK);
  } catch (error) {
    sendResponse(
      res,
      "Cannot find post",
      null,
      StatusCode.INTERNAL_SERVER_ERROR
    );
  }
};

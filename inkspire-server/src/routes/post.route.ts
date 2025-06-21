import express from "express";
import { getAllPosts, getPost } from "../controllers/post.controller";

const router = express();

router.get("/", getAllPosts);

router.get("/:slug", getPost);

export default router;

import express from "express";
import userRouter from "./routes/user.route";
import postRouter from "./routes/post.route";
import commentRouter from "./routes/comment.route";
import connectMongoDB from "./utils/connect-db";

const app = express();

app.use(express.json());

const PORT = 3000;

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(PORT, () => {
  connectMongoDB();
  console.log("Server is running");
});

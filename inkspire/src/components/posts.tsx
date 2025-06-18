import React from "react";
import Post from "./post";

const Posts = () => {
  return (
    <div className="flex flex-col gap-12 mb-8">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;

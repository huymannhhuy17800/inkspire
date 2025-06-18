import React from "react";
import Comment from "./comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="underline text-xl text-gray-500">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Write a comment...."
          className="w-full bg-[var(--surface-color)] placeholder-[var(--primary-text-color)] text-[var(--primary-text-color)] p-4 rounded-xl border-none outline-none"
        ></textarea>
        <button className="bg-[var(--surface-color)] text-[var(--primary-text-color)] px-4 py-3 font-medium rounded-xl cursor-pointer flex gap-1">
          <span>Send</span>
          <span>✈️</span>
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;

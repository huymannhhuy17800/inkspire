import React from "react";

const PostMenuAction = () => {
  return (
    <div className="">
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
          <span className="">📌 Save this post</span>
        </div>
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
          <span className="">🗑️ Delete this post</span>
        </div>
      </div>
    </div>
  );
};

export default PostMenuAction;

import React, { useState } from "react";
import Posts from "../components/posts";
import SideMenu from "../components/side-menu";

const PostList = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="bg-[var(--surface-color)] text-sm text-[var(--primary-text-color)] py-2 px-4 mb-4 md:hidden rounded-2xl cursor-pointer"
      >
        {open ? "Close" : "Filter Or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <Posts />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostList;

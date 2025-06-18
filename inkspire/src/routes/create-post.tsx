import React from "react";
import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const CreatePostPage = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="">Loading....</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You must log in to write your posts</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Create Your New Post</h1>
      <form action="" className="flex flex-col gap-6 flex-1 mb-6">
        <button className="p-2 shadow-md rounded-xl text-sm bg-white text-gray-500 w-max cursor-pointer">
          Add A Cover Image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none cursor-pointer"
          type="text"
          placeholder="Your Awesome Story Title...."
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose A Category
          </label>
          <select name="cate" id="" className="p-2 rounded-xl bg-">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Detabases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          id=""
          placeholder="A Short Description..."
          className="bg-white shadow-md outline-none"
        ></textarea>
        <ReactQuill
          theme="snow"
          className="flex-1 p-2 rounded-2xl bg-white shadow-md"
        />
        <button className="bg-[var(--surface-color)] text-[var(--primary-text-color)] font-medium rounded-2xl p-2 mt-4 w-36 ">
          Send
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;

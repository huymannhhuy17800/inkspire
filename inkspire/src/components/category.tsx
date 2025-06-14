import React from "react";
import { Link } from "react-router";

const Category = () => {
  return (
    <div className="hidden md:flex bg-[var(--background-color)] text-[--primary-text-color] rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-[var(--surface-color)] text-[var(--primary-text-color)] rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-[var(--button-bg-color)] text-[var(--primary-text-color)] rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-[var(--button-bg-color)] text-[var(--primary-text-color)] rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-[var(--button-bg-color)] text-[var(--primary-text-color)] rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=search-engine"
          className="hover:bg-[var(--button-bg-color)] text-[var(--primary-text-color)] rounded-full px-4 py-2"
        >
          Search Engine
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-[var(--button-bg-color)] text-[var(--primary-text-color)] rounded-full px-4 py-2"
        >
          Marketing
        </Link>
        <span className="text-xl font-medium text-[var(--primary-text-color)]">
          |
        </span>
        {/* search bar  */}
        <div className="bg-amber-50 p-2 rounded-full flex items-center gap-2">
          <div className="">🔍</div>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;

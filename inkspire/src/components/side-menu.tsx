import React from "react";
import Search from "./search";
import { Link } from "react-router";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm"></div>
      <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="newest"
          className="appearance-none w-4 h-4 border-[1.5px] cursor-pointer rounded-sm checked:bg-[var(--surface-color)]"
        />
        Newest
      </label>
      <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="popular"
          className="appearance-none w-4 h-4 border-[1.5px] cursor-pointer rounded-sm checked:bg-[var(--surface-color)]"
        />
        Most Popular
      </label>
      <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="trending"
          className="appearance-none w-4 h-4 border-[1.5px] cursor-pointer rounded-sm checked:bg-[var(--surface-color)]"
        />
        Trending
      </label>
      <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="newest"
          className="appearance-none w-4 h-4 border-[1.5px] cursor-pointer rounded-sm checked:bg-[var(--surface-color)]"
        />
        Oldest
      </label>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm underline">
        <Link to="/posts" className="">
          All
        </Link>
        <Link to="/posts?cat=web-design" className="">
          Web Design
        </Link>
        <Link to="/posts?cat=development" className="">
          Development
        </Link>
        <Link to="/posts?cat=databases" className="">
          Databases
        </Link>
        <Link to="/posts?cat=seo" className="">
          Search Engines
        </Link>
        <Link to="/posts?cat=marketing" className="">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;

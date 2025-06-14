import React from "react";
import Image from "./image";
import { Link } from "react-router";

const Post = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="cpp.jpg" className="rounded-2xl object-cover" w={735} />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Technology is reshaping our world
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-[var(--primary-text-color)]">John Cena</Link>
          <span>In</span>
          <Link className="text-[var(--primary-text-color)]">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p className="">
          Technology is reshaping our world, from AI-driven automation to
          quantum computing breakthroughs. Smart devices, cloud computing, and
          cybersecurity innovations continue to push boundaries, making everyday
          life more efficient and interconnected.
        </p>
        <Link
          to="/test"
          className="underline text-[var(--primary-text-color)] text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Post;

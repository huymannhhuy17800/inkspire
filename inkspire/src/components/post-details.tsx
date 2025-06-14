import React from "react";
import Image from "./image";
import { Link } from "react-router";
import PostMenuAction from "./post-menu-action";
import Search from "./search";

const PostDetails = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            "Life is like riding a bicycle. To keep your balance, you must keep
            moving" - Albert Einstein
          </h1>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="">Written By</span>
            <Link to="" className="text-[var(--primary-text-color)]">
              John Cena
            </Link>
            <span className="">on</span>
            <Link to="" className="text-[var(--primary-text-color)]">
              Web Design
            </Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Technology is reshaping our world, from AI-driven automation to
            quantum computing breakthroughs. Smart devices, cloud computing, and
            cybersecurity innovations continue to push boundaries, making
            everyday life more efficient and interconnected
          </p>
        </div>

        <div className="hidden lg:block w-2/5">
          <Image src="cpp.jpg" className="rounded-2xl" />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p className="">
            Technology is reshaping our world, from AI-driven automation to
            quantum computing breakthroughs. Smart devices, cloud computing, and
            cybersecurity innovations continue to push boundaries, making
            everyday life more efficient and interconnectedTechnology is
            reshaping our world, from AI-driven automation to quantum computing
            breakthroughs. Smart devices, cloud computing, and cybersecurity
            innovations continue to push boundaries, making everyday life more
            efficient and interconnectedTechnology is reshaping our world, from
            AI-driven automation to quantum computing breakthroughs. Smart
            devices, cloud computing, and cybersecurity innovations continue to
            push boundaries, making everyday life more efficient and
            interconnectedTechnology is reshaping our world, from AI-driven
            automation to quantum computing breakthroughs. Smart devices, cloud
            computing, and cybersecurity innovations continue to push
            boundaries, making everyday life more efficient and interconnected
          </p>
          <p className="">
            Technology is reshaping our world, from AI-driven automation to
            quantum computing breakthroughs. Smart devices, cloud computing, and
            cybersecurity innovations continue to push boundaries, making
            everyday life more efficient and interconnectedTechnology is
            reshaping our world, from AI-driven automation to quantum computing
            breakthroughs. Smart devices, cloud computing, and cybersecurity
            innovations continue to push boundaries, making everyday life more
            efficient and interconnected
          </p>
          <p className="">
            Technology is reshaping our world, from AI-driven automation to
            quantum computing breakthroughs. Smart devices, cloud computing, and
            cybersecurity innovations continue to push boundaries, making
            everyday life more efficient and interconnectedTechnology is
            reshaping our world, from AI-driven automation to quantum computing
            breakthroughs. Smart devices, cloud computing, and cybersecurity
            innovations continue to push boundaries, making everyday life more
            efficient and interconnected Technology is reshaping our world, from
            AI-driven automation to quantum computing breakthroughs. Smart
            devices, cloud computing, and cybersecurity innovations continue to
            push boundaries, making everyday life more efficient and
            interconnectedTechnology is reshaping our world, from AI-driven
            automation to quantum computing breakthroughs. Smart devices, cloud
            computing, and cybersecurity innovations continue to push
            boundaries, making everyday life more efficient and interconnected
            Technology is reshaping our world, from AI-driven automation to
            quantum computing breakthroughs. Smart devices, cloud computing, and
            cybersecurity innovations continue to push boundaries, making
            everyday life more efficient and interconnectedTechnology is
            reshaping our world, from AI-driven automation to quantum computing
            breakthroughs. Smart devices, cloud computing, and cybersecurity
            innovations continue to push boundaries, making everyday life more
            efficient and interconnected Technology is reshaping our world, from
            AI-driven automation to quantum computing breakthroughs. Smart
            devices, cloud computing, and cybersecurity innovations continue to
            push boundaries, making everyday life more efficient and
            interconnectedTechnology is reshaping our world, from AI-driven
            automation to quantum computing breakthroughs. Smart devices, cloud
            computing, and cybersecurity innovations continue to push
            boundaries, making everyday life more efficient and interconnected
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="cpp.jpg"
                className="w-12 h-12 rounded-full object-cover"
                w={48}
                h={48}
              />
              <Link className="">John Cena</Link>
            </div>
            <p className="text-sm text-gray-500">
              Technology is reshaping our world
            </p>
          </div>

          <div className="flex gap-2">
            <Link to="">
              <Image src="facebook.svg" />
            </Link>
            <Link to="">
              <Image src="instagram.svg" />
            </Link>
          </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="">
              Web Design
            </Link>
            <Link className="underline" to="">
              Development
            </Link>
            <Link className="underline" to="">
              Databases
            </Link>
            <Link className="underline" to="">
              Search Engine
            </Link>
            <Link className="underline" to="">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

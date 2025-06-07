import React, { useState } from "react";
import { IKImage } from "imagekitio-react";
import Image from "./image";
import { Link } from "react-router";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image
          src="https://ik.imagekit.io/ag0e1xo26/atn1.jpg"
          alt="test"
          w={32}
          h={32}
        />
        <span>Inkspire</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* Mobile menu list */}
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? "X" : "?"}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-amber-500 transition-all ease-in-out ${
            openMenu ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="">Trending</Link>
          <Link to="">Most Popular</Link>
          <Link to="">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-amber-700">
              Login 👍
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 xl:gap-12 font-medium">
        <Link to="">Home</Link>
        <Link to="">Trending</Link>
        <Link to="">Most Popular</Link>
        <Link to="">About</Link>
        <Link to="">
          <button className="py-2 px-4 rounded-3xl bg-amber-700">
            Login 👍
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

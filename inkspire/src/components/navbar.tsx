import React, { useEffect, useState } from "react";
import Image from "./image";
import { Link } from "react-router";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import ThemeSelector from "./theme-selector";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const selectedTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState<any>(selectedTheme);

  const validThemes = ["dark", "light", "dark-gold", "purple"];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme: any) => {
    if (validThemes.includes(newTheme)) {
      setTheme(newTheme);
      console.log(newTheme);
      // Store user selected theme
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between bg-[var(--background-color)] px-4 md:px-8 lg:px-16 lx:px-32">
      {/* LOGO */}
      <Link
        to="/"
        className="flex items-center gap-4 text-2xl font-bold text-[var(--primary-text-color)]"
      >
        <Image src="atn1.jpg" alt="test" w={32} h={32} />
        <span>Inkspire</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* Mobile menu list */}
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? "X" : "☰"}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-amber-500 transition-all ease-in-out ${
            openMenu ? "-right-0" : "-right-[100%]"
          }`}
        >
          <ThemeSelector handleChange={handleThemeChange} />
          <Link to="/">Home</Link>
          <Link to="">Trending</Link>
          <Link to="">Most Popular</Link>
          <Link to="">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-red">Login 👍</button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}

      <div className="hidden items-center md:flex gap-8 xl:gap-12 font-medium relative text-[var(--primary-text-color)]">
        <Link to="" className="">
          Home
        </Link>
        <Link to="">Trending</Link>
        <Link to="">Most Popular</Link>
        <Link to="">About</Link>
        <ThemeSelector handleChange={handleThemeChange} />
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-[var(--surface-color)] cursor-pointer ">
              Login 🚪
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;

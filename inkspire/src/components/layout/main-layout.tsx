import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { Outlet } from "react-router";
import ThemeSelector from "../theme-selector";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      {/* Renders the matching child route of a parent route or nothing if no child
      route matches. */}
      <Outlet />
    </div>
  );
};

export default MainLayout;

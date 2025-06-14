import Navbar from "../navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      {/* Renders the matching child route of a parent route or nothing if no child
      route matches. */}
      <div className="px-4 md:px-8 lg:px-16 lx:px-32">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

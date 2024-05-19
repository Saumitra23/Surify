import React from "react";
import UpperNav from "../components/UpperNav";
import MainNav from "./MainNav";

const SideNav = () => {
  return (
    <div className="flex min-w-96 m-2 flex-col gap-2 text-xl text-gray-400">
      <UpperNav />
      <MainNav />
    </div>
  );
};

export default SideNav;

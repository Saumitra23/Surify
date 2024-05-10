import React from "react";
import UpperNav from "../components/UpperNav";
import MainNav from "./MainNav";

const SideNav = () => {
  return (
    <div className="flex flex-1 max-w-96 m-2 flex-col gap-2 text-xl text-gray-500">
      <UpperNav />
      <MainNav />
    </div>
  );
};

export default SideNav;

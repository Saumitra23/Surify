import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHome } from "react-icons/ci";

const UpperNav = () => {
  return (
    <div className="flex font h-32 flex-col card_light rounded-md justify-around">
      <div className="flex flex-row gap-4 justify-start px-4 hover:cursor-pointer hover:text-white">
        <CiHome size={25} />
        <h3>Home</h3>
      </div>
      <div className="flex flex-row gap-4 justify-start px-4 hover:cursor-pointer hover:text-white">
        <CiSearch size={25} onClick={() => console.log("clicked")} />
        <h3>Search</h3>
      </div>
    </div>
  );
};

export default UpperNav;

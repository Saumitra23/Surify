import React from "react";
import { VscLibrary } from "react-icons/vsc";
import { IoIosAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const NavInfo = () => {
  return (
    <div className="p-4 relative">
      <div className="flex flex-row justify-start flex-1">
        <VscLibrary
          cursor={`pointer`}
          className="text-gray-500 hover:text-white"
          size={25}
        />
        <h3
          onClick={() => console.log("duhh")}
          className="px-4 hover:hover_prop hover:after:after"
        >
          Your Library
        </h3>
        <div className="flex flex-1 justify-end gap-2">
          <IoIosAdd size={32} className=" hover:hover_prop" />
          <FaArrowRight className="mt-1.5  hover:hover_prop" />
        </div>
      </div>
      <ol className="flex flex-1 flex-row text-sm justify-between mt-4">
        <li>Playlists</li>
        <li>Artists</li>
        <li>Albums</li>
        <li>Podcasts & Shows</li>
      </ol>
      <div className="flex flex-row justify-between mt-5">
        <CiSearch
          size={25}
          onClick={() => console.log("clicked")}
          className="hover:hover_prop"
        />
        <div className="flex flex-row hover:hover_prop">
          <h3 className="flex text-[14px] mx-1">Recents</h3>
          <GiHamburgerMenu className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default NavInfo;

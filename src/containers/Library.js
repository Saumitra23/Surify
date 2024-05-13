import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import LibraryCard from "../components/LibraryCard";
import { useSelector } from "react-redux";
const Library = () => {
  const { playlistData } = useSelector((state) => state.details);
  return (
    <div className="h-screen flex-1 mt-3 px-4 pr-5 max-h-[1050px] overflow-scroll">
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
      <LibraryCard playlist={playlistData} />
    </div>
  );
};

export default Library;

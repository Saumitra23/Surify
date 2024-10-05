import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import LibraryCard from "../components/LibraryCard";
import { useSelector } from "react-redux";
const Library = ({ navState }) => {
  const { playlistData, artistData } = useSelector((state) => state.details);
  const data = [...playlistData, ...artistData];
  return (
    <div
      className={`flex-1 mt-3 px-4 pr-5 ${
        navState ? "h-[800px]" : "h-[900px]"
      } overflow-scroll ${!navState && "no-scrollbar"}`}
    >
      <div
        className={`${
          !navState && "hidden"
        } flex flex-row justify-between mt-5`}
      >
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
      <LibraryCard navState={navState} data={data} />
    </div>
  );
};

export default Library;

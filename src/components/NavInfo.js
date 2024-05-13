import React from "react";
import { VscLibrary } from "react-icons/vsc";
import { IoIosAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from "../redux/features/dataSlice";
import Library from "../containers/Library";

const NavInfo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.details);
  console.log("Data", data);
  return (
    <div className="relative">
      <div className="px-4 pt-4 flex flex-row justify-start flex-1">
        <VscLibrary
          cursor={`pointer`}
          className="text-gray-500 hover:text-white"
          size={25}
        />
        <h3
          onClick={() => dispatch(fetchPlaylist())}
          className="px-4 hover:hover_prop hover:after:after"
        >
          Your Library
        </h3>
        <div className="flex flex-1 justify-end gap-2">
          <IoIosAdd size={32} className=" hover:hover_prop" />
          <FaArrowRight className="mt-1.5  hover:hover_prop" />
        </div>
      </div>
      <ol className="px-4 flex flex-1 flex-row text-sm justify-between mt-4">
        <li>Playlists</li>
        <li>Artists</li>
        <li>Albums</li>
        <li>Podcasts & Shows</li>
      </ol>
      <Library />
    </div>
  );
};

export default NavInfo;

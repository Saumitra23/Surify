import React from "react";
import { VscLibrary } from "react-icons/vsc";
import { IoIosAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from "../redux/features/dataSlice";
import Library from "../containers/Library";

const NavInfo = ({ navState, onNavChange }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.details);
  console.log("Data", data);

  return (
    <div className={navState ? `relative` : ``}>
      <div className="mx-7 pt-4 flex flex-row justify-start flex-1">
        <div
          className={`flex flex-row w-36 justify-between hover:hover_prop ${
            navState ? "hover:after:navShow" : "hover:after:navHide"
          }`}
          onClick={onNavChange}
        >
          <VscLibrary size={35} />
          <h3 className={`${!navState && "hidden"}`}>Your Library</h3>
        </div>
        <div
          className={`${!navState && "hidden"} flex flex-1 justify-end gap-2`}
        >
          <IoIosAdd size={32} className=" hover:hover_prop" />
          <FaArrowRight className="mt-1.5  hover:hover_prop" />
        </div>
      </div>
      <ol
        className={`${
          !navState && "hidden"
        } px-4 flex flex-1 flex-row text-sm justify-between mt-4`}
      >
        <li>Playlists</li>
        <li>Artists</li>
        <li>Albums</li>
        <li>Podcasts & Shows</li>
      </ol>
      <Library navState={navState} />
    </div>
  );
};

export default NavInfo;

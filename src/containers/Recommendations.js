import React, { forwardRef, useState } from "react";
import MusicGrid from "../components/MusicGrid";
import SearchGrid from "./SearchGrid";
import { customGenerator } from "../utilities/customGradient";
import { useSelector } from "react-redux";

const Recommendations = forwardRef((props, ref) => {
  const gridData = useSelector((state) => state.details.playlistData);
  const isSearch =
    useSelector((state) => state.info.currentSelection) == "search";
  const [bgColor, setBgColor] = useState(`linear-gradient(blue, black)`);

  const handleBgChange = () => {
    const currBg = `linear-gradient(${customGenerator()}, black)`;
    setBgColor(currBg);
  };

  return (
    <div
      className={`flex flex-1 m-2 p-2 w-screen max-w-[2500px] h-max-screen rounded-md transition-all delay-1000`}
      style={{ background: bgColor }}
    >
      {isSearch ? (
        <SearchGrid
          ref={ref}
          searchInput={props.searchInput}
          searchInputHandler={props.searchInputHandler}
        />
      ) : (
        <MusicGrid
          data={gridData.slice(0, 8)}
          bgChangeHandler={handleBgChange}
        />
      )}
    </div>
  );
});

export default Recommendations;

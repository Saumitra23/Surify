import React, { useState } from "react";
import MusicGrid from "../components/MusicGrid";
import { customGenerator } from "../utilities/customGradient";
import { useSelector } from "react-redux";

const Recommendations = () => {
  const gridData = useSelector((state) => state.details.playlistData);
  const [bgColor, setBgColor] = useState(`linear-gradient(blue, black)`);

  const handleBgChange = () => {
    const currBg = `linear-gradient(${customGenerator()}, black)`;
    setBgColor(currBg);
  };

  return (
    <div
      className={`flex flex-1 m-2 p-2 w-screen max-w-[2150px] h-[1275px] rounded-md transition-all delay-1000`}
      style={{ background: `${bgColor}` }}
    >
      <MusicGrid data={gridData.slice(0, 8)} bgChangeHandler={handleBgChange} />
    </div>
  );
};

export default Recommendations;

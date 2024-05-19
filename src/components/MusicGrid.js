import React from "react";
import { customGenerator } from "../utilities/customGradient";
const MusicGrid = ({ data, bgChangeHandler }) => {
  return (
    <div className="p-4 pt-20 flex-1 max-h-80 grid grid-cols-4 grid-rows-2 gap-10">
      {data.map((val) => (
        <div
          key={val.id}
          className="flex-1 flex flex-row m-auto h-20 w-96  hover:bg-gray-800 rounded-md text-center bg-gray-700 hover:cursor-pointer"
          onMouseEnter={bgChangeHandler}
        >
          <img
            src={val.images[0].url}
            className="flex h-auto w-20 mr-10 rounded-sm"
          />
          <h3 className="flex text-[1rem] flex-1 m-auto justify-start text-white">
            {val.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default MusicGrid;

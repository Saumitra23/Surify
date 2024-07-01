import React from "react";
const MusicGrid = ({ data, bgChangeHandler }) => {
  return (
    <div className="p-4 pt-20 flex-1 max-h-80 grid grid-cols-4 grid-rows-2 gap-10">
      {data.map((val) => (
        <div
          key={val.id}
          className="flex-1 flex flex-row m-auto 2xl:h-20 w-96 xl:max-w-80 xl:h-16 2xl:max-w-96 hover:bg-gray-800 rounded-md text-center bg-gray-700 hover:cursor-pointer"
          onMouseEnter={bgChangeHandler}
        >
          <img
            src={val.images[0].url}
            className="flex h-auto xl:w-16 xl:mr-4 2xl:w-20 2xl:mr-10 rounded-sm"
          />
          <h3 className="flex 2xl:text-[1rem] flex-1 m-auto justify-start text-white">
            {val.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default MusicGrid;

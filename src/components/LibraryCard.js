import React from "react";

const LibraryCard = ({ playlist }) => {
  return playlist.map((val) => (
    <div
      key={val.id}
      className="py-4 flex flex-row justify-around text-center transition-all ease-in-out duration-500 hover:scale-105 hover:cursor-pointer"
    >
      <img src={val.images[0].url} className="flex w-14 mr-10 rounded-sm" />
      <h3 className="flex text-[1rem] flex-1 m-auto justify-start">
        {val.name}
      </h3>
    </div>
  ));
};

export default LibraryCard;

import React from "react";

const LibraryCard = ({ data }) => {
  return data.map((val) => (
    <div
      key={val.id}
      className="py-4 flex flex-row justify-around text-center transition-all ease-in-out duration-500 hover:scale-105 hover:cursor-pointer shadow-md hover:card_dark"
    >
      <img
        src={val.images[0].url}
        className="flex w-14 mr-10 ml-1 rounded-sm"
      />
      <h3 className="flex text-[1rem] flex-1 m-auto justify-start hover:text-white">
        {val.name}
      </h3>
    </div>
  ));
};

export default LibraryCard;

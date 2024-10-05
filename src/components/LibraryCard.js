import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPlaylistData, updateInfo } from "../redux/infoSlice";

const LibraryCard = ({ data, navState }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return data.map((val) => (
    <div
      key={val.id}
      className="py-4 flex flex-row justify-around text-center transition-all ease-in-out duration-500 hover:scale-105 hover:cursor-pointer shadow-md hover:card_dark overflow-visible"
      onClick={() => {
        dispatch(updateInfo({ type: val.type, data: val }));
        navigate("playlist");
      }}
    >
      <img
        src={val.images[0].url}
        className={`flex mr-10 ml-1 ${
          !navState ? "rounded-full w-10" : "rounded-sm w-14"
        }`}
      />
      <h3
        className={`${
          !navState && "hidden"
        } flex text-[1rem] flex-1 m-auto justify-start hover:text-white`}
      >
        {val.name}
      </h3>
    </div>
  ));
};

export default LibraryCard;

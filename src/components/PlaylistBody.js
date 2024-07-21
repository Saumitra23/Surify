import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const PlaylistBody = ({ tracks, count }) => {
  let arr = Array(count).fill(null);
  return (
    <div className="bg-gradient-to-b min-h-[850px] rounded-md from-gray-200/10 via-gray-500 to-gray-800 shadow-[5px_-5px_20px_-5px_black] overflow-scroll text-center">
      <BsFillPlayCircleFill
        color="#172554"
        size={70}
        className="m-3 hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out"
      />
      {tracks
        ? tracks?.map((val, id) => (
            <section className="flex flex-row justify-between m-4 p-4 outline-2 outline-dotted cursor-pointer">
              <img src={val.track.album?.images[2]?.url} />
              <h2 className="m-auto">{val.track.album.name}</h2>
            </section>
          ))
        : arr.map(() => (
            <section className="flex animate-pulse flex-row justify-between m-4 p-4 outline-2 outline-dotted cursor-pointer">
              <div class="rounded-full bg-slate-700 h-10 w-10"></div>
              <div class="flex-1 h-10 mx-20 rounded-md bg-slate-700"></div>
            </section>
          ))}
    </div>
  );
};

export default PlaylistBody;

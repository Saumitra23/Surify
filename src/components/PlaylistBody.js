import React, { useRef, useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const PlaylistBody = ({ tracks, count }) => {
  const hoverRef = useRef([]);
  if (hoverRef.current.length !== 20) {
    hoverRef.current = Array(count)
      .fill()
      .map((_, i) => hoverRef.current[i] || React.createRef());
  }

  console.log("tracks", tracks);
  let arr = Array(count).fill(null);
  const [isHover, setIsHover] = useState(Array(count).fill(false));
  console.log("ishover", isHover, hoverRef);
  return (
    <div className="bg-gradient-to-b min-h-[600px] rounded-md from-gray-200/10 via-gray-500 to-gray-800 shadow-[5px_-5px_20px_-5px_black] overflow-scroll text-center">
      <BsFillPlayCircleFill
        color="#172554"
        size={70}
        className="m-3 hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out"
      />
      <section className="flex flex-row justify-between m-4 p-2">
        <h2 className="flex-[0.04] text-left"></h2>
        <h2 className="flex-[0.6] text-left">Title</h2>
        <h2 className="flex-[0.3] text-left">Album</h2>
        <h2 className="flex-[0.3]">Date added</h2>
        <h2 className="flex-[0.3]">Duration</h2>
      </section>
      {tracks
        ? tracks?.map((val, id) => {
            const playtime = val.track.duration_ms / (1000 * 60);
            const date_added = new Date(val.added_at).toLocaleDateString();
            return (
              val?.track?.name != "" && (
                <section className="flex flex-row justify-between m-4 p-2 shadow-xl cursor-pointer hover:bg-gradient-to-b hover:from-gray-200/50 via-gray-500 to-gray-800">
                  <h2
                    className="flex-[0.04] text-left my-auto"
                    onMouseEnter={() => {
                      setIsHover(isHover.map((val, idx) => id == idx));
                    }}
                    onMouseLeave={() => {
                      setIsHover(isHover.map((val) => false));
                    }}
                  >
                    <BsFillPlayCircleFill size={25} />
                  </h2>
                  <div className="flex flex-row flex-[0.6] text-left">
                    <img src={val.track.album?.images[2]?.url} width={60} />
                    <h2 className="mx-2 my-auto">{val.track.name}</h2>
                  </div>
                  <h2 className="flex-[0.3] text-left my-auto">
                    {val.track.album.name}
                  </h2>
                  <h2 className="flex-[0.3] my-auto">{date_added}</h2>
                  <h2 className="flex-[0.3] my-auto">{`${playtime.toPrecision(
                    3
                  )}`}</h2>
                </section>
              )
            );
          })
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

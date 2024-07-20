import React from "react";

const PlaylistBody = ({ tracks }) => {
  return (
    <div className="bg-gradient-to-b from-gray-200/10 via-gray-500 to-gray-800 shadow-[5px_-5px_20px_-5px_black] overflow-scroll text-center">
      {tracks?.map((val, id) => (
        <section className="flex flex-row justify-between m-4 p-4 outline-2 outline-dotted cursor-pointer">
          <img src={val.track.album?.images[2]?.url} />
          <h2 className="m-auto">{val.track.album.name}</h2>
        </section>
      ))}
    </div>
  );
};

export default PlaylistBody;

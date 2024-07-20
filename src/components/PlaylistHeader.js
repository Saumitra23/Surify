import React from "react";

const PlaylistHeader = ({ playlistData }) => {
  return (
    <section className="flex flex-row h-96 pt-40 px-4 m-4">
      <img src={playlistData.images[0].url} width={250} height={250} />
      <div className="flex flex-1 justify-between flex-col px-4">
        <h3 className="mt-8 px-1">{playlistData.type}</h3>
        <h1 className="text-8xl font-serif py-2">{playlistData.name}</h1>
        <h3 className="px-1 text-lg">{playlistData?.description}</h3>
        <h3 className="px-1 text-md">{`by: ${playlistData.owner.display_name}`}</h3>
      </div>
    </section>
  );
};

export default PlaylistHeader;

import axios from "axios";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { GiMusicSpell } from "react-icons/gi";

const UpperNav = () => {
  const searchArtists = async (e) => {
    // e.preventDefault();
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.token}`,
        },
        params: {
          q: "Arijit",
          type: "artist",
        },
      }
    );
    console.log("data", data);
  };
  return (
    <div className="flex font h-40 flex-col card_light rounded-md justify-around">
      <div className="flex flex-row gap-4 justify-start px-4 hover:cursor-pointer hover:text-white">
        <CiHome size={25} />
        <h3 onClick={searchArtists}>Home</h3>
      </div>
      <div className="flex flex-row gap-4 justify-start px-4 hover:cursor-pointer hover:text-white">
        <CiSearch size={25} onClick={() => console.log("clicked")} />
        <h3>Search</h3>
      </div>
      <div className="flex flex-row gap-4 justify-start px-4 hover:cursor-pointer hover:text-white">
        <GiMusicSpell size={25} />
        <h3>My Nirvana</h3>
      </div>
    </div>
  );
};

export default UpperNav;

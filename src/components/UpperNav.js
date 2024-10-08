import { CiSearch } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { GiMusicSpell } from "react-icons/gi";

const navIcons = {
  home: <CiHome size={35} className="xl:min-w-6 2xl:min-w-10" />,
  search: <CiSearch size={35} className="xl:min-w-6 2xl:min-w-10" />,
  nirvana: <GiMusicSpell size={35} className="xl:min-w-6 2xl:min-w-10" />,
};

const UpperNav = ({ iconType, label, clickHandler, navState }) => {
  // const searchArtists = async (e) => {
  //   // e.preventDefault();
  //   const { data } = await axios.get(
  //     "https://api.spotify.com/v1/me/playlists",
  //     {
  //       headers: {
  //         Authorization: `Bearer ${window.localStorage.token}`,
  //       },
  //       params: {
  //         q: "Arijit",
  //         type: "artist",
  //       },
  //     }
  //   );
  //   console.log("data", data);
  // };
  console.log("navstate", navState);
  return (
    <div
      className="flex flex-row gap-4  justify-start mx-6 hover:cursor-pointer hover:text-white"
      onClick={clickHandler}
    >
      {navIcons[iconType]}
      <h3 className={`mt-1 ${navState ? "initial" : "hidden"}`}>{label}</h3>
    </div>
  );
};

export default UpperNav;

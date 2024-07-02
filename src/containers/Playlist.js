import { useEffect, useState } from "react";
import PlaylistHeader from "../components/PlaylistHeader";
import PlaylistBody from "../components/PlaylistBody";
import { customGenerator } from "../utilities/customGradient";
import { useSelector } from "react-redux";

const Playlist = () => {
  const [bgColor, setBgColor] = useState(`linear-gradient(blue, black)`);
  const playlistData = useSelector((state) => state.info.currentData);
  console.log("data is", playlistData);

  useEffect(() => {
    handleBgChange();
  }, []);

  const handleBgChange = () => {
    const currBg = `linear-gradient(${customGenerator()}, white)`;
    setBgColor(currBg);
  };

  return (
    <div
      className={`flex flex-1 flex-col gap-4 m-2 w-screen max-w-[2500px] h-[1275px] rounded-md transition-all delay-1000`}
      style={{ background: bgColor }}
    >
      <PlaylistHeader playlistData={playlistData} />
      <PlaylistBody />
    </div>
  );
};

export default Playlist;

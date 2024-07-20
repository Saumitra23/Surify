import { useEffect, useState } from "react";
import PlaylistHeader from "../components/PlaylistHeader";
import PlaylistBody from "../components/PlaylistBody";
import { customGenerator } from "../utilities/customGradient";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylistData } from "../redux/infoSlice";

const Playlist = () => {
  const [bgColor, setBgColor] = useState(`linear-gradient(blue, black)`);
  const dispatch = useDispatch();
  const playlistData = useSelector((state) => state.info.currentData);
  console.log("data is", playlistData);

  useEffect(() => {
    handleBgChange();
    dispatch(fetchPlaylistData(playlistData.id));
  }, [playlistData.id]);

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
      <PlaylistBody tracks={playlistData?.data} />
    </div>
  );
};

export default Playlist;

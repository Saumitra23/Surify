import { useEffect, useState } from "react";
import PlaylistHeader from "../components/PlaylistHeader";
import PlaylistBody from "../components/PlaylistBody";
import { customGenerator } from "../utilities/customGradient";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylistData } from "../redux/infoSlice";
import { useNavigate } from "react-router-dom";

const Playlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playlistData = useSelector((state) => state.info.currentData);
  const tokenValid = useSelector((state) => state.info.tokenSync);
  const [bgColor, setBgColor] = useState(`linear-gradient(blue, black)`);

  console.log("data is", playlistData);

  useEffect(() => {
    handleBgChange();
    dispatch(fetchPlaylistData(playlistData.id));
  }, [playlistData.id]);

  useEffect(() => {
    if (!tokenValid) {
      navigate("/");
    }
  }, [tokenValid]);

  const handleBgChange = () => {
    const currBg = `linear-gradient(${customGenerator()}, white)`;
    setBgColor(currBg);
  };

  return (
    <div
      className={`flex flex-1 flex-col gap-4 m-2 w-screen max-w-[2500px] h-[1065px] rounded-md transition-all delay-1000`}
      style={{ background: bgColor }}
    >
      <PlaylistHeader playlistData={playlistData} />
      <PlaylistBody
        tracks={playlistData?.data}
        count={playlistData?.tracks?.total}
      />
    </div>
  );
};

export default Playlist;

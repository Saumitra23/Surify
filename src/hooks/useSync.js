import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArtist,
  fetchPlaylist,
  fetchUser,
} from "../redux/features/dataSlice";

export default function useSync() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [synced, setSynced] = useState(false);
  const tokenValid = useSelector((state) => state.details.tokenSync);

  useEffect(() => {
    console.log("synced", synced);
    console.log("token", tokenValid);
    if (!synced) {
      console.log("ent sync");
      dispatch(fetchPlaylist());
      dispatch(fetchArtist());
      dispatch(fetchUser());
      setSynced(true);
    } else if (!tokenValid) {
      console.log("ent sync 3");
      window.localStorage.removeItem("token");
      navigate("/login");
    }
  }, [synced, tokenValid]);
}

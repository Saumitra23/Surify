import React, { useEffect, useState } from "react";
import MainNav from "./MainNav";
import SideNav from "./SideNav";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/features/loginSlice";
import { fetchPlaylist } from "../redux/features/dataSlice";

const Home = () => {
  const session = useSelector((state) => state.login.isSession);
  const tokenExist = useSelector((state) => state.details.tokenSync);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [synced, setSynced] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  const tokenSync = () => {
    if (window.localStorage.getItem("token")) {
      dispatch(login());
    }
  };

  console.log("token", session);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchPlaylist());
    };

    if (!synced) {
      tokenSync();
      setSynced(true);
    } else if (synced && !session) {
      navigate("/");
    } else if (!isFetched) {
      fetchData();
      setIsFetched(true);
    } else if (!tokenExist) {
      window.localStorage.removeItem("token");
      navigate("/");
    }
  }, [synced, isFetched]);

  return (
    <div className="h-screen">
      <SideNav />
    </div>
  );
};

export default Home;

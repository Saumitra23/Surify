import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import Recommendations from "./Recommendations";
import useSync from "../hooks/useSync";
import ProfileMenu from "./ProfileMenu";

const Home = () => {
  useSync();
  return (
    <div className="flex flex-row h-screen relative">
      <SideNav />
      <Recommendations />
      <ProfileMenu />
      {/* <RightInfo /> */}
    </div>
  );
};

export default Home;

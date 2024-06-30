import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import Recommendations from "./Recommendations";
import useSync from "../hooks/useSync";
import useNav from "../hooks/useNav";
import ProfileMenu from "./ProfileMenu";

const Home = () => {
  useSync();
  const {
    navState,
    onNavChange,
    handleHome,
    handleSearch,
    handleNirvana,
    inputRef,
  } = useNav();

  return (
    <div className="flex flex-row h-screen relative">
      <SideNav
        navState={navState}
        onNavChange={onNavChange}
        handleHome={handleHome}
        handleSearch={handleSearch}
        handleNirvana={handleNirvana}
      />
      <Recommendations ref={inputRef} />
      <ProfileMenu />
      {/* <RightInfo /> */}
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import Recommendations from "./Recommendations";
import useSync from "../hooks/useSync";
import useNav from "../hooks/useNav";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Home = () => {
  useSync();
  const {
    navState,
    searchInput,
    isPlaylist,
    onNavChange,
    handleHome,
    handleSearch,
    handleNirvana,
    searchInputHandler,
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
      {!isPlaylist && (
        <Recommendations
          ref={inputRef}
          searchInput={searchInput}
          searchInputHandler={searchInputHandler}
        />
      )}
      <ProfileMenu />
      <Outlet />
    </div>
  );
};

export default Home;

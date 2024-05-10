import React from "react";
import HomeCard from "./containers/HomeCard";
import SideNav from "./containers/SideNav";
import Player from "./containers/Player";

const App = () => {
  return (
    <div className="text-3xl text-white flex flex-row bg-gradient-to-b from-black to-blue-950 h-screen">
      <SideNav />
      <HomeCard />
      {/* <Player /> */}
      {/* <Profile/> */}
      {/* <Library/> */}
      {/* <Search/> */}
      {/* <Settings/> */}
    </div>
  );
};

export default App;

import React from "react";
import useNav from "../hooks/useNav";
import UpperNav from "../components/UpperNav";
import NavInfo from "../components/NavInfo";

const SideNav = () => {
  const { navState, onNavChange } = useNav();

  return (
    <div
      className={`flex ${
        navState ? "min-w-96" : "max-w-20"
      } m-2 flex-col gap-2 text-xl text-gray-400 overflow-hidden`}
    >
      <div className="flex h-40 flex-col card_light rounded-md justify-around">
        <UpperNav iconType={`home`} label={`Home`} />
        <UpperNav iconType={`search`} label={`Search`} />
        <UpperNav iconType={`nirvana`} label={`MyNirvana`} />
      </div>
      <div className="card_light rounded-lg">
        <NavInfo navState={navState} onNavChange={onNavChange} />
      </div>
    </div>
  );
};

export default SideNav;

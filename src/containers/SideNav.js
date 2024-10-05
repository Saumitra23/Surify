import React from "react";
import UpperNav from "../components/UpperNav";
import NavInfo from "../components/NavInfo";

const SideNav = (props) => {
  console.log("props", props);
  return (
    <div
      className={`flex ${
        props.navState ? "min-w-96" : "max-w-20"
      } m-2 flex-col gap-2 text-xl text-gray-400 overflow-hidden`}
    >
      <div className="flex h-48 flex-col card_light rounded-md justify-around">
        <UpperNav
          iconType={`home`}
          label={`Home`}
          id={0}
          clickHandler={props.handleHome}
          navState={props.navState}
        />
        <UpperNav
          iconType={`search`}
          label={`Search`}
          id={1}
          clickHandler={props.handleSearch}
          navState={props.navState}
        />
        <UpperNav
          iconType={`nirvana`}
          label={`MyNirvana`}
          id={2}
          clickHandler={props.handleNirvana}
          navState={props.navState}
        />
      </div>
      <div className="card_light rounded-lg">
        <NavInfo navState={props.navState} onNavChange={props.onNavChange} />
      </div>
    </div>
  );
};

export default SideNav;

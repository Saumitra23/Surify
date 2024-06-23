import React from "react";
import { GiMusicSpell } from "react-icons/gi";

const Menu = ({ isPremium, clickHandler }) => {
  return (
    <div
      className={`absolute flex flex-col justify-around top-14 right-0 bg-gray-600 w-60 ${
        isPremium ? "h-52 " : "h-40"
      } hover:cursor-pointer rounded-sm text-white`}
      onClick={clickHandler}
    >
      <h3 className="flex-1 hover:bg-gray-500 pt-2 pb-1 px-4">Account</h3>
      <h3 className="flex-1 hover:bg-gray-500 pt-2 pb-1 px-4">Settings</h3>
      <h3 className="flex-1 hover:bg-gray-500 px-4 pt-2">Logout</h3>
      {isPremium ? (
        <div className="flex flex-row justify-around pt-2 pb-4 px-2 text-blue-500">
          <GiMusicSpell size={25} className=" mt-1 " />
          <h2 className="flex-1 text-2xl text-center ">Premium</h2>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;

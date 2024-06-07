import React, { useState } from "react";
import { useSelector } from "react-redux";
import Menu from "../components/Menu";
const ProfileMenu = () => {
  const userDetails = useSelector((state) => state.details.user);
  const userIcon = userDetails?.display_name?.substr(0, 1) ?? "A";
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isPressed, setIsPressed] = useState("");
  return (
    <div className="absolute top-6 right-6">
      <div
        className="relative w-10 h-10 bg-gray-600 rounded-full text-center pt-2 text-white cursor-pointer"
        onClick={() => setToggleMenu((prev) => !prev)}
        style={{ transform: isPressed }}
        onMouseDown={() => setIsPressed(`scale(0.9)`)}
        onMouseUp={() => setIsPressed(`scale(1)`)}
      >
        {userIcon}
      </div>
      {toggleMenu ? <Menu isPremium={true} /> : null}
    </div>
  );
};

export default ProfileMenu;

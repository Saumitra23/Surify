import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useProfile = () => {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.details.user);
  const userIcon = userDetails?.display_name?.substr(0, 1) ?? "A";
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isPressed, setIsPressed] = useState("");

  const clickHandler = (e) => {
    switch (e.target.textContent) {
      case "Logout":
        window.localStorage.removeItem("token");
        navigate("/");
    }
  };

  return {
    userDetails,
    userIcon,
    toggleMenu,
    isPressed,
    setToggleMenu,
    setIsPressed,
    clickHandler,
  };
};

export default useProfile;

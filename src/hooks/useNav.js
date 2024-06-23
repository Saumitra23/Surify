import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useNav = () => {
  const navigate = useNavigate();
  const [navState, setNavState] = useState(0);

  const onNavChange = () => {
    setNavState((prev) => !prev);
  };

  const handleHome = (e) => {
    navigate("/home");
  };

  const handleSearch = (e) => {
    console.log("Search");
  };

  const handleNirvana = (e) => {
    console.log("Nirvana");
  };

  return { navState, onNavChange, handleHome, handleSearch, handleNirvana };
};

export default useNav;

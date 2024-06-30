import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateSearch } from "../redux/infoSlice";
import { useDispatch, useSelector } from "react-redux";

const useNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useSelector((state) => state.info.isSearch);
  const inputRef = useRef(null);
  const [navState, setNavState] = useState(0);

  const onNavChange = () => {
    setNavState((prev) => !prev);
  };

  const handleHome = (e) => {
    navigate("/home");
    dispatch(updateSearch(false));
  };

  const handleSearch = (e) => {
    console.log("Search");
    if (isSearch) {
      inputRef.current.focus();
    }
    dispatch(updateSearch(true));
  };

  const handleNirvana = (e) => {
    console.log("Nirvana");
  };

  return {
    navState,
    onNavChange,
    handleHome,
    handleSearch,
    handleNirvana,
    inputRef,
  };
};

export default useNav;

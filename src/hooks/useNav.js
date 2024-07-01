import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateInfo } from "../redux/infoSlice";
import { useDispatch, useSelector } from "react-redux";

const useNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch =
    useSelector((state) => state.info.currentSelection) == "search";
  const isPlaylist =
    useSelector((state) => state.info.currentSelection) == "playlist";
  const curr = useSelector((state) => state);
  const inputRef = useRef(null);

  const [navState, setNavState] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const onNavChange = () => {
    setNavState((prev) => !prev);
  };

  const handleHome = (e) => {
    navigate("/home");
    dispatch(updateInfo({ type: "" }));
  };

  const handleSearch = (e) => {
    if (isSearch) {
      inputRef.current.focus();
    } else {
      navigate("/home");
      dispatch(updateInfo("search"));
    }
  };

  const handleNirvana = (e) => {
    console.log("Nirvana");
  };

  const searchInputHandler = (e) => {
    console.log("e", e.target.value);
    setSearchInput(e.target.value);
  };

  return {
    navState,
    searchInput,
    isPlaylist,
    onNavChange,
    handleHome,
    handleSearch,
    handleNirvana,
    searchInputHandler,
    inputRef,
  };
};

export default useNav;

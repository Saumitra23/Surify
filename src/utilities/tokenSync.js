import { useDispatch } from "react-redux";

export const tokenSync = () => {
  const dispatch = useDispatch();
  if (window.localStorage.getItem("token")) {
    dispatch(login());
  }
};

import React, { useEffect } from "react";
import Logo from "../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/features/loginSlice";
import { updateToken } from "../redux/features/dataSlice";
import { auth as authUrl } from "../ApiManager/ApiManager";
const Login = () => {
  const session = useSelector((state) => state.login.isSession);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    console.log("hash", hash);
    console.log("token", token);
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      dispatch(login());
      dispatch(updateToken());
      navigate("/home");
    } else if (token) {
      navigate("/home");
    }
  }, []);

  console.log("session", session);
  return (
    <section className="h-screen text-white justify-center">
      <img src={Logo} width={300} className="mx-auto mb-[200px]"></img>
      <div className="flex-1 flex flex-col m-auto text-center w-[700px] h-[700px] justify-around bg-gradient-to-t from-blue-950 to-black">
        <h1 className="m-auto text-4xl font-bold">Log in to Surify</h1>
        <form className="flex text-gray-400 flex-col gap-5 justify-center mx-auto">
          <input
            className="w-80 p-2 rounded-sm bg-gray-900"
            value={`Saumitrashukla23@gmail.com`}
          />
          <input
            className="w-80 p-2 rounded-sm bg-gray-900"
            value={`*********`}
          />
        </form>
        <div className="flex flex-col m-auto gap-5">
          <a href={authUrl}>
            <button className="m-auto w-40 h-12 rounded-md bg-gradient-to-b from-black to-gray-700">
              Log In
            </button>
          </a>
          <button className="m-auto w-40 h-12 rounded-md bg-gradient-to-b from-black to-gray-700">
            Forgot Password
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;

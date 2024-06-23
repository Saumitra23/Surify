import React, { useEffect, useState } from "react";
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
      <div className="flex cursor-pointer relative flex-col m-auto text-center w-[500px] h-[500px] justify-around bg-gradient-to-t from-blue-950 to-black">
        <h1 className="mt-20 flex-1 text-4xl font-bold z-10">
          Log in to Surify
        </h1>

        <div className="flex-1 flex-col m-auto gap-5">
          <a href={authUrl}>
            <button className="m-auto w-40 text-black h-12 rounded-md bg-green-800 transition-all ease-in-out duration-500 hover:scale-105 hover:bg-green-700 ">
              Log in using Spotify
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;

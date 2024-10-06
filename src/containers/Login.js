import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/features/loginSlice";
import { updateToken } from "../redux/features/dataSlice";
import { auth as authUrl } from "../ApiManager/ApiManager";
import BgImg from "../assets/bgMusic.jpg";

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
      console.log("token", token);
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
      <img src={BgImg} alt="bg-img" className="h-screen w-screen" />
      <img
        src={Logo}
        width={300}
        height={300}
        className="absolute top-0 right-0 xl:right-28"
      />
      <a href={authUrl}>
        <h1
          className="absolute top-64 right-20 xl:right-[180px] border-2 border-[#1990AC] px-4 py-2 xl:px-6 xl:py-3 cursor-pointer rounded-md hover:scale-105 ease-in-out duration-300"
          style={{ backgroundColor: "rgba(25, 144, 172, 0.2)" }}
        >
          Log in to Surify
        </h1>
      </a>
    </section>
  );
};

export default Login;

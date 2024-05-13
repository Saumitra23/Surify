import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import SideNav from "./containers/SideNav";
import Login from "./containers/Login";
import Home from "./containers/Home";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: window.localStorage.getItem("token") ? <Home /> : <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sideNav",
    element: <SideNav />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import SideNav from "./containers/SideNav";
import Login from "./containers/Login";
import Home from "./containers/Home";

import "./index.css";
import Playlist from "./containers/Playlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "playlist",
        element: <Playlist />,
      },
    ],
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

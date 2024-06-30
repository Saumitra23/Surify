import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice";
import dataReducer from "./features/dataSlice";
import infoReducer from "./infoSlice.js";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    details: dataReducer,
    info: infoReducer,
  },
});

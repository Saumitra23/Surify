import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice";
import dataReducer from "./features/dataSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    details: dataReducer,
  },
});

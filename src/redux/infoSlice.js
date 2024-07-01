import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  currentSelection: "",
  currentData: null,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    updateInfo: (state, action) => {
      console.log("action", action);
      state.currentSelection = action.payload.type;
      state.currentData = action.payload.data;
    },
  },
});

export const { updateInfo } = infoSlice.actions;
export default infoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearch: false,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      console.log("action", action);
      state.isSearch = action.payload;
    },
  },
});

export const { updateSearch } = infoSlice.actions;
export default infoSlice.reducer;

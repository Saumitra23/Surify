import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDetails } from "../ApiManager/ApiManager";
import { fetchPlaylist } from "./features/dataSlice";

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
  extraReducers: (builder) => {
    builder.addCase(fetchPlaylistData.fulfilled, (state, action) => {
      console.log("fullfilled", action.payload);
      state.currentData = { ...state.currentData, data: action.payload.items };
    });
    builder.addCase(fetchPlaylistData.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export const fetchPlaylistData = createAsyncThunk(
  "fetchPlaylistData",
  async (id) => {
    const resp = await fetchDetails(`playlists/${id}/tracks`);
    return resp;
  }
);

export const { updateInfo } = infoSlice.actions;
export default infoSlice.reducer;

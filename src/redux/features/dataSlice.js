import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserPlaylist } from "../../ApiManager/ApiManager";

const initialState = {
  playlistData: [],
  artistData: [],
  showData: [],
  albumData: [],
  tokenSync: false,
};

export const dataSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    updateToken: (state) => {
      state.tokenSync = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlaylist.fulfilled, (state, action) => {
      state.playlistData = action.payload.items;
    });
    builder.addCase(fetchPlaylist.rejected, (state, action) => {
      state.tokenSync = false;
    });
  },
});

export const fetchPlaylist = createAsyncThunk("fetchPlaylist", async () => {
  const resp = await fetchUserPlaylist("me/playlists");
  return resp;
});

export const { updateToken } = dataSlice.actions;
export default dataSlice.reducer;

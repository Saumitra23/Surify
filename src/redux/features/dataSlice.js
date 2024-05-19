import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDetails } from "../../ApiManager/ApiManager";

const initialState = {
  user: [],
  playlistData: [],
  artistData: [],
  showData: [],
  albumData: [],
  tokenSync: true,
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
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log("rejected");
      state.tokenSync = false;
    });
    builder.addCase(fetchPlaylist.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.playlistData = action.payload.items;
    });
    builder.addCase(fetchPlaylist.rejected, (state, action) => {
      console.log("rejected");
      state.tokenSync = false;
    });
    builder.addCase(fetchArtist.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.artistData = action.payload.artists.items;
    });
    builder.addCase(fetchArtist.rejected, (state, action) => {
      console.log("rejected");
      state.tokenSync = false;
    });
  },
});

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  const resp = await fetchDetails("me");
  return resp;
});
export const fetchPlaylist = createAsyncThunk("fetchPlaylist", async () => {
  const resp = await fetchDetails("me/playlists");
  return resp;
});

export const fetchArtist = createAsyncThunk("fetchArtist", async () => {
  const resp = await fetchDetails("me/following?type=artist");
  return resp;
});

export const { updateToken } = dataSlice.actions;
export default dataSlice.reducer;

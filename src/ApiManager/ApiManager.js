import axios from "axios";

const CLIENT_ID = "caceeadfec2b4d489583ceee9a514ee1";
const REDIRECT_URI = "http://localhost:3000";
const baseUrl = "https://api.spotify.com/v1/";
const authUrl = "https://accounts.spotify.com/authorize";
const SCOPE =
  "playlist-read-private user-follow-read user-library-read user-read-private user-read-email";
export const auth = `${authUrl}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${SCOPE}`;

export const fetchDetails = async (endpoint) => {
  try {
    const resp = await axios(`${baseUrl}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    });
    console.log("resp", resp);
    return resp.data;
  } catch (error) {
    throw new Error();
  }
};

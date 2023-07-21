import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser as loginUserAPI,
  fetchUserProfile,
} from "../userAPI/userAPI";

//create async action for user connection

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginCredentials) => {
    const data = await loginUserAPI(loginCredentials);
    const userProfile = await fetchUserProfile(data.body.token);
    console.log("user", userProfile.body);

    return { token: data.body.token, user: userProfile.body };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    user: null,
    rememberMe: false,
    error: null,
    token: null,
  }, // initial state
  reducers: {
    toggleRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
        state.loggedIn = true;
        state.user = action.payload.user;
        if (state.rememberMe) {
          //if rememberMe is true, store token in localStorage
          localStorage.setItem("token", action.payload);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loggedIn = false;
      });
  },
});

export const { toggleRememberMe } = userSlice.actions;
export default userSlice.reducer;

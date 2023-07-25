import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser as loginUserAPI,
  fetchUserProfile,
  updateUsername as editUserAPI,
} from "../userAPI/userAPI";

//create async action for user connection

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginCredentials, { getState }) => {
    const data = await loginUserAPI(loginCredentials);
    const userProfile = await fetchUserProfile(data.body.token);

    if (getState().user.rememberMe) {
      localStorage.setItem("token", data.body.token);
      localStorage.setItem("user", JSON.stringify(userProfile.body));
    }

    return { token: data.body.token, user: userProfile.body };
  }
);
export const editUser = createAsyncThunk(
  "user/edit",
  async ({ token, userName }, thunkAPI) => {
    try {
      const response = await editUserAPI(token, userName);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    rememberMe: false,
    error: null,
  }, // initial state
  reducers: {
    toggleRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
      state.token = null;
      state.rememberMe = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.loggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loggedIn = false;
      })
      .addCase(editUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(editUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { toggleRememberMe, logout } = userSlice.actions;
export default userSlice.reducer;

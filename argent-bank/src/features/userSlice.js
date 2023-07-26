import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser as loginUserAPI,
  fetchUserProfile,
  updateUsername as editUserAPI,
} from "../userAPI/userAPI";

//create async action for user connection

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginCredentials, { getState,dispatch }) => {
    const data = await loginUserAPI(loginCredentials);
    const response = await fetchUserProfile(data.body.token);
    if (getState().user.rememberMe) {
      localStorage.setItem("token", data.body.token);
    }
    return { token: data.body.token, user: response.body };
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (token, { getState }) => {
    const {
      body: { userName, firstName, lastName },
    } = await fetchUserProfile(token);
    if (getState().user.rememberMe) {
      localStorage.setItem(
        "user",
        JSON.stringify({ userName, firstName, lastName })
      );
    }
    return { user: { userName, firstName, lastName } };
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
    user: JSON.parse(localStorage.getItem("user"))
      ? {
          userName: JSON.parse(localStorage.getItem("user")).userName,
          firstName: JSON.parse(localStorage.getItem("user")).firstName,
          lastName: JSON.parse(localStorage.getItem("user")).lastName,
        }
      : null,
    rememberMe: false,
    error: null,
  }, // initial state
  reducers: {
    toggleRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
    updateUserName: (state, action) => {
      state.user.userName = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
      state.rememberMe = false;
      state.token = null;
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
        state.loading = false;
        state.loggedIn = true;
        state.token = action.payload.token;
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

export const { toggleRememberMe, logout, updateUserName } = userSlice.actions;
export default userSlice.reducer;

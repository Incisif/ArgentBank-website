import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser as loginUserAPI,
  fetchUserProfile,
  updateUsername as editUserAPI,
} from "../userAPI/userAPI";

// Async action to log in the user
export const loginUser = createAsyncThunk(
  "user/login",
  async (loginCredentials, { getState }) => {
    const data = await loginUserAPI(loginCredentials);
    const token = data.body.token;

    if (getState().user.rememberMe) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }

    return { token };
  }
);

// Async action to fetch user's profile
export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (token, { getState }) => {
    // Fetch user profile from API with provided token
    const {
      body: { userName, firstName, lastName },
    } = await fetchUserProfile(token);
    // If "remember me" is true, store the user info in localStorage
    if (getState().user.rememberMe) {
      localStorage.setItem(
        "user",
        JSON.stringify({ userName, firstName, lastName })
      );
    }
    return { user: { userName, firstName, lastName } };
  }
);

// Async action to edit user's profile
export const editUser = createAsyncThunk(
  "user/edit",
  async ({token, userName}, thunkAPI) => {
    try {
      // Fetch edit user API with provided token and new username
      const response = await editUserAPI(token, userName);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Helper function to update localStorage
const updateUserInLocalStorage = (userName, state) => {
  // If "remember me" is true, update the user info in localStorage
  if (state.rememberMe) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user.userName = userName;
      localStorage.setItem("user", JSON.stringify(user));
    }
  }
};
// Helper function to set loading state
const startLoading = (state) => {
  state.status = "loading";
};

// Helper function to handle failed state and error
const loadingFailed = (state, action) => {
  state.status = "failed";
  state.error = action.payload;
};

// User slice with reducers and async actions
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user"))
      ? {
          userName: JSON.parse(localStorage.getItem("user")).userName,
          firstName: JSON.parse(localStorage.getItem("user")).firstName,
          lastName: JSON.parse(localStorage.getItem("user")).lastName,
        }
      : null,
    editingUser: null,
    rememberMe: false,
    error: null,
  },
  reducers: {
    // Toggle the "remember me" state
    toggleRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
    // Update the username in the state
    updateUserName: (state, action) => {
      state.user.userName = action.payload;
    },
    // Update the editing username in the state
    updateEditingUserName: (state, action) => {
      state.editingUser = action.payload;
    },
    // Logout user and clean up state and localStorage
    logout: (state) => {
      state.user = null;
      state.rememberMe = false;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle the different states of async actions with helper functions and specific logic
      .addCase(loginUser.pending, startLoading)
      .addCase(loginUser.rejected, loadingFailed)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(fetchUser.pending, startLoading)
      .addCase(fetchUser.rejected, loadingFailed)
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(editUser.pending, startLoading)
      .addCase(editUser.rejected, loadingFailed)
      .addCase(editUser.fulfilled, (state) => {
        state.user.userName = state.editingUser;
        updateUserInLocalStorage(state.editingUser, state);
        state.editingUser = null;
        state.status = "succeeded";
      })
  },
});

// Export actions and reducer
export const { toggleRememberMe, logout, updateUserName, updateEditingUserName  } = userSlice.actions;
export default userSlice.reducer;

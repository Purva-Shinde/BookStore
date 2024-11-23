import { createSlice } from "@reduxjs/toolkit";

 const initialAuthUser = localStorage.getItem("Users");
const initialState = {
  authUser: initialAuthUser ? JSON.parse(initialAuthUser) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser(state, action) {
      state.authUser = action.payload;
       localStorage.setItem("Users", JSON.stringify(action.payload));
    },
    clearAuthUser(state) {
      state.authUser = null;
      localStorage.removeItem("Users");
    },
  },
});

// Export actions
export const { setAuthUser, clearAuthUser } = authSlice.actions;

// Export selector for accessing the state
export const selectAuthUser = (state) => state.auth.authUser;

// Export reducer
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isOpen: boolean;
  screen: "phone" | "email" | "login";
}

const initialState: AuthState = {
  isOpen: false,
  screen: "phone",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openEmail: (state) => {
      state.isOpen = true;
      state.screen = "email";
    },

    openLogin: (state) => {
      state.isOpen = true;
      state.screen = "login";
    },

    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  openEmail,
  openLogin,
  closeModal,
} = authSlice.actions;

export default authSlice.reducer;
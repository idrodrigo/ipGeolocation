import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",

  initialState: {
    info: null,
    loadingInfo: false,
  },

  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
      state.loadingInfo = false;
    },

    setLoadingInfo: (state) => {
      state.loadingInfo = true;
    },
  },
});

export const { setInfo, setLoadingInfo } = appSlice.actions;

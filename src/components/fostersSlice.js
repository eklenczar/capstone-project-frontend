import { createSlice } from "@reduxjs/toolkit";

const fostersSlice = createSlice({
  name: "fosters",
  initialState: {
    foster: null,
    status: "idle", // loading state
  },
  reducers: {
    setFoster(state, action) {
      state.foster = action.payload;
    },
    fosterLogin(state, action) {
      state.foster = action.payload;
    },
    fosterLogout(state) {
      state.foster = null;
    },
  },
});

export const { setFoster, fosterLogin, fosterLogout } = fostersSlice.actions;

export default fostersSlice.reducer;

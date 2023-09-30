import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLitters = createAsyncThunk("kittens/fetchKittens", () => {
  // return a Promise containing the data we want
  return fetch("http://localhost:3000/litters")
    .then((response) => response.json())
    .then((data) => data);
});

const littersSlice = createSlice({
  name: "litters",
  initialState: {
    entities: [], // array of litters
    status: "idle", // loading state
  },
  reducers: {
    litterAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    litterDeleted(state, action) {
        const litter = state.entities.filter((litter) => litter.id !== action.payload.id);
      },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchLitters.pending](state) {
      state.status = "loading";
    },
    [fetchLitters.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    [fetchLitters.rejected](state) {
        state.status = "failed";
    },
  },
});

export const { litterAdded, litterUpdated } = littersSlice.actions;

export default littersSlice.reducer;

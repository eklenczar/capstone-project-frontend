import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchKittens = createAsyncThunk("kittens/fetchKittens", () => {
  // return a Promise containing the data we want
  return fetch("http://localhost:3000/kittens")
    .then((response) => response.json())
    .then((data) => data);
});

const kittensSlice = createSlice({
  name: "kittens",
  initialState: {
    entities: [], // array of cats
    status: "idle", // loading state
  },
  reducers: {
    kittenAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    kittenUpdated(state, action) {
      const kitten = state.entities.find((kitten) => kitten.id === action.payload.id);
      kitten = {...kitten, ...action.payload};
    },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchKittens.pending](state) {
      state.status = "loading";
    },
    [fetchKittens.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    [fetchKittens.rejected](state) {
        state.status = "failed";
    },
  },
});

export const { kittenAdded, kittenUpdated } = kittensSlice.actions;

export default kittensSlice.reducer;



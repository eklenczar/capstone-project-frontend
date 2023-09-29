import { configureStore } from "@reduxjs/toolkit";

import kittensReducer from "./components/kittenSlice"
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  kittens: kittensReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools:process.env.NODE_ENV !== "production"
});

export default store;

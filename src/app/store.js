import { configureStore } from "@reduxjs/toolkit";
import localDataStore from "../features/localDataStore";

export const store = configureStore({
  reducer: localDataStore,
});

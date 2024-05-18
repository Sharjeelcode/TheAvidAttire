import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  localDataStore: [],
};

export const localDataStore = createSlice({
  name: "localDataStore",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.localDataStore.push(action.payload);
    },
  },
});

export const { addData } = localDataStore.actions;

export default localDataStore.reducer;

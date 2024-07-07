import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberValue: 0,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue++;
    },

    decrement: (state) => {
      state.numberValue--;
    },
  },
});

export default numberSlice.reducer;
export const { increment, decrement } = numberSlice.actions;
export const numberSelector = (state) => state.number.numberValue;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counterValue++;
    },

    decrement: (state) => {
      state.counterValue--;
    },

    incrementbyamount: (state, action) => {
      state.counterValue += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, incrementbyamount } = counterSlice.actions;

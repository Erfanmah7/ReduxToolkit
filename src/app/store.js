import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import numberSlice from "../features/number/numberSlice";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice,
    number: numberSlice,
  },
});

export default counterStore;

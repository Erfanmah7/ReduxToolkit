import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import numberSlice from "../features/number/numberSlice";
import logger from "react-logger";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice,
    number: numberSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default counterStore;

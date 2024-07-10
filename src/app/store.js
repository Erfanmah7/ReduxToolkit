import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import numberSlice from "../features/number/numberSlice";
import logger from "redux-logger";
import usersSlice from "../features/users/usersSlice";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice,
    number: numberSlice,
    users: usersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default counterStore;

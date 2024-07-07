import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

const counterStore = configureStore({ reducer: { counter: counterSlice } });

export default counterStore;

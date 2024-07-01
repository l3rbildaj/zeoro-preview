import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./app/AppSlice";


export const store = configureStore({
  reducer: {
    todo: AppSlice,
  },
});


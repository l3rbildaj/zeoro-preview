import { createSlice } from "@reduxjs/toolkit";
import { appPending, appRejected, appSuccess } from "./reducers";
import appThunk from "./AppThunk";

const InitialState = [];

const AppSlice = createSlice({
  name: "AppSlice",
  initialState: InitialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(appThunk.pending, appPending)
      .addCase(appThunk.fulfilled, appSuccess)
      .addCase(appThunk.rejected, appRejected);
  },
});

export const { addTask } = AppSlice.actions;
export default AppSlice.reducer;

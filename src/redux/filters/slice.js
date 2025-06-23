import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: { name: "", number: "" },
  reducers: {
    setNameFilterAction: (state, { payload }) => {
      state.name = payload;
    },
    setNumberFilterAction: (state, { payload }) => {
      state.number = payload;
    },
  },
});

export const { setNameFilterAction, setNumberFilterAction } = slice.actions;
export const filterReducer = slice.reducer;

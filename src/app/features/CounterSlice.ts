import { createSlice } from "@reduxjs/toolkit";
import { CounterState } from "../types";

const initialState: CounterState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

export const { increment, reset } = counterSlice.actions;
export default counterSlice.reducer;

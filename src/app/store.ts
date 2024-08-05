import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import loginReducer from "./features/LoginSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";

const initialState = null;

const rootReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});

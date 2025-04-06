import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./brandsOps";

const handlePending = (state) => {
  state.error = false;
  state.loading = true;
};
const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const slice = createSlice({
  name: "brands",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchBrands.pending, handlePending)
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBrands.rejected, handleRejected),
});

export const selectBrands = (state) => state.brands.items;
export const selectLoading = (state) => state.brands.loading;
export const selectError = (state) => state.brands.error;

export const brandsReducer = slice.reducer;

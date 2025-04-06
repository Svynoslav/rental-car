import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  },
  reducers: {
    changeFilter(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearFilters(state) {
      state.brand = "";
      state.price = "";
      state.mileageFrom = "";
      state.mileageTo = "";
    },
  },
});

export const selectBrandFilter = (state) => state.filters.brand;
export const selectPriceFilter = (state) => state.filters.price;
export const selectMileageFromFilter = (state) => state.filters.mileageFrom;
export const selectMileageToFilter = (state) => state.filters.mileageTo;

export const filterReducer = slice.reducer;
export const { changeFilter, clearFilters } = slice.actions;

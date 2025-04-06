import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarById } from "./carsOps";

const handlePending = (state) => {
  state.error = false;
  state.loading = true;
};
const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    selectedCar: null,
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {
    clearCars(state) {
      state.items = [];
      state.page = 1;
    },
    clearSelectedCar(state) {
      state.selectedCar = null;
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        const uniqueCars = action.payload.filter(
          (car) => !state.items.some((item) => item.id === car.id)
        );
        state.items = [...state.items, ...uniqueCars];
      })
      .addCase(fetchCars.rejected, handleRejected)

      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, handleRejected),
});

export const { clearCars, clearSelectedCar, incrementPage } = slice.actions;

export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
export const selectCars = (state) => state.cars.items;
export const selectCarById = (state) => state.cars.selectedCar;

export const carsReducer = slice.reducer;

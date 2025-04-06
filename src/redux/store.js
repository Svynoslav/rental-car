import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice";
import { filterReducer } from "./filtersSlice";
import { brandsReducer } from "./brandsSlice";
import { favoritesReducer } from "./favouriteSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filterReducer,
    brands: brandsReducer,
    favorites: favoritesReducer,
  },
});

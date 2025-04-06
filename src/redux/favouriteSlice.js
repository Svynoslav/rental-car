import { createSlice } from "@reduxjs/toolkit";

const loadFavoritesFromStorage = () => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const slice = createSlice({
  name: "favorites",
  initialState: {
    favoriteCars: loadFavoritesFromStorage(),
  },
  reducers: {
    addFavorite(state, action) {
      if (!state.favoriteCars.includes(action.payload)) {
        state.favoriteCars.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favoriteCars));
      }
    },
    removeFavorite(state, action) {
      state.favoriteCars = state.favoriteCars.filter(
        (id) => id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favoriteCars));
    },
  },
});

export const selectFavoriteCars = (state) => state.favorites.favoriteCars;

export const { addFavorite, removeFavorite } = slice.actions;
export const favoritesReducer = slice.reducer;

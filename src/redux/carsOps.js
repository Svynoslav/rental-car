import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { baseURL } from "../constants";

axios.defaults.baseURL = baseURL;

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (filters, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const page = state.cars.page;
      const limit = 8;

      const params = {
        limit,
        page,
      };

      if (filters.brand) params.brand = filters.brand;
      if (filters.price) params.rentalPrice = filters.price;
      if (filters.mileageFrom) params.minMileage = filters.mileageFrom;
      if (filters.mileageTo) params.maxMileage = filters.mileageTo;

      const res = await axios.get("/cars", { params });
      return res.data.cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { baseURL } from "../constants";

axios.defaults.baseURL = baseURL;

export const fetchBrands = createAsyncThunk(
  "brands/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/brands");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

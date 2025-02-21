import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Using createAsyncThunk, you can define an asynchronous action that fetches data from your API.
// This thunk will automatically dispatch pending, fulfilled, and rejected actions based on the promise lifecycle.
// For example:
export const fetchData = createAsyncThunk("data/fetchData", async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  const fetchedData = json.data;

  return fetchedData;
});

// Define a slice that will hold your fetched data along with loading and error states:
const initialState = {
  data: null,
  isLoading: false,
  isError: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default dataSlice.reducer;

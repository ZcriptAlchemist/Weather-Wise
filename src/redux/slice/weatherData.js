import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let result;

// fetching weather data
export const fetchWeatherData = createAsyncThunk(
  "fetchWeatherData",
  async (city) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=4&key=${
        import.meta.env.VITE_KEY
      }`
    );
    result = await response.json();
  }
);

const weatherData = createSlice({
  name: "weatherData",
  initialState: {
    data: null,
    isError: false,
    status: "idle",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchWeatherData.fulfilled, (state) => {
      // state.data = action.payload;
      // console.log(`action.payload clg -`);
      // console.log(state.data.location.name);
      state.data = result;
      state.status = "succeeded";
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      console.log(`Error ${action.payload}`);
      state.isError = true;
      state.status = "failed";
    });
  },
});

export default weatherData.reducer;

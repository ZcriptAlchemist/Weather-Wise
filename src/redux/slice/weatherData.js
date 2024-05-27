// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// let result;

// // fetching weather data
// export const fetchWeatherData = createAsyncThunk(
//   "fetchWeatherData",
//   async (city) => {
//     try {
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=4&key=${
//           import.meta.env.VITE_KEY
//         }`
//       );
//       result = await response.json();
//     } catch (error) {
//       console.log(error);
//       alert("Please enter a different city name");
//       location.reload();
//     }
//   }
// );

// const weatherData = createSlice({
//   name: "weatherData",
//   initialState: {
//     data: null,
//     isError: false,
//     status: "idle",
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchWeatherData.pending, (state) => {
//       state.status = "loading";
//     });
//     builder.addCase(fetchWeatherData.fulfilled, (state) => {
//       // state.data = action.payload;
//       // console.log(`action.payload clg -`);
//       // console.log(state.data.location.name);
//       state.data = result;
//       state.status = "succeeded";
//     });
//     builder.addCase(fetchWeatherData.rejected, (state, action) => {
//       console.log(`Error ${action.payload}`);
//       state.isError = true;
//       state.status = "failed";
//     });
//   },
// });

// export default weatherData.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetching weather data
export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (city, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=4&key=${
          import.meta.env.VITE_KEY
        }`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      alert("Please enter a different place name");
      setTimeout(() => {
        location.reload();
      }, 1000); // Wait 1 second before reloading the page
      return rejectWithValue(error.message);
    }
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
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.isError = true;
      state.status = "failed";
      console.log(`Error: ${action.payload}`);
    });
  },
});

export default weatherData.reducer;

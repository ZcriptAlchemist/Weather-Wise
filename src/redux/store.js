import { configureStore } from "@reduxjs/toolkit";
import weatherDataReducer from "./slice/weatherData";
// import weatherData from "./slice/weatherData";

export const store = configureStore({
  reducer: {
    weatherData: weatherDataReducer,
  },
});

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./redux/slice/weatherData";
import SearchBar from "./components/SearchBar";
import LoadingScreen from "./components/LoadingScreen";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

function App() {
  // redux reducer dispatches and selectors
  const dispatch = useDispatch();
  const weatherDataStatus = useSelector((state) => state.weatherData.status);
  const initialCity = "chennai";

  // useEffect for initial render
  useEffect(() => {
    dispatch(fetchWeatherData(initialCity));
  }, []);

  return (
    <>
      {weatherDataStatus == "succeeded" ? (
        <>
          <SearchBar />
          {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) ? (
            <>
              <WeatherCard />
              <Forecast />
            </>
          ) : (
            <div className="flex">
              <WeatherCard />
              <Forecast />
            </div>
          )}
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;

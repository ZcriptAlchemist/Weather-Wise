import { useSelector } from "react-redux";

const WeatherCard = () => {
  const weatherData = useSelector((state) => state.weatherData.data);
  return (
    <section className="flex justify-center items-center flex-col mx-4 p-4 border-2 border-black rounded-3xl lg:w-2/5">
      <div className="w-full flex justify-between items-center">
        <p className="text-2xl font-bold">
          {weatherData.location.name}
          <span className="text-lg font-medium">
            , {weatherData.location.country}
          </span>
        </p>
        <p className="text-5xl font-bold">{weatherData.current.temp_c}°C</p>
      </div>
      <div className="flex flex-col items-center justify-center p-3">
        <img
          className="h-32"
          src={weatherData.current.condition.icon}
          alt="weather-image"
        />
        <p className="text-2xl font-bold">
          {weatherData.current.condition.text}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <p className="text-xl font-semibold">
          Humidity: {weatherData.current.humidity}
        </p>
        <p className="text-xl font-semibold">
          Feels like {weatherData.current.feelslike_c}°C
        </p>
        <p className="text-xl font-semibold">
          Wind: {weatherData.current.wind_kph}
        </p>
        <p className="text-xl font-semibold">UV: {weatherData.current.uv}</p>
      </div>
    </section>
  );
};

export default WeatherCard;

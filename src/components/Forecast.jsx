import { useSelector } from "react-redux";

const Forecast = () => {
  const forecastData = useSelector(
    (state) => state.weatherData.data.forecast.forecastday
  );

  return (
    <section className="m-4 flex flex-col justify-center items-center lg:w-full lg:border-2 lg:border-black lg:rounded-3xl lg:px-6 lg:py-2">
      <p className="text-3xl font-bold">Forecast</p>
      <div className="lg:flex justify-between w-full">
        {forecastData.map((item, index) => (
          <div
            className="w-full m-2 p-4 flex items-center justify-between font-bold border-2 border-black rounded-3xl lg:flex-col lg:w-1/4"
            key={index}
          >
            <p>{item.date}</p>
            <div className="flex items-center justify-center flex-col">
              <p>{item.day.avgtemp_c}°C</p>
              <p>{item.day.condition.text}</p>
            </div>
            <img src={item.day.condition.icon} alt="forcast-day-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forecast;

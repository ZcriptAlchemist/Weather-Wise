import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../redux/slice/weatherData";
import locationPin from "../assets/location-pin.svg";

const SearchBar = () => {
  // useStates
  const [inputText, setInputText] = useState("");
  const [onFocus, setOnFocus] = useState(false);

  // redux reducer dispatch
  const dispatch = useDispatch(); //

  // function to handle keydown for enter key
  const handleKeyDown = (e) => {
    if (inputText == "") {
      return;
    } else if (e.key === "Enter") {
      dispatch(fetchWeatherData(inputText));
      setInputText("");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center p-4">
      <h1 className="font-logo font-black text-2xl lg:text-4xl">WeatherWise</h1>
      <div
        className={`w-full my-4 flex justify-between items-center border-2 rounded-full border-black p-2 ${
          onFocus ? "border-blue-400 shadow-xl ease-in-out" : ""
        } lg:w-8/12`}
      >
        <input
          className="w-11/12 p-2 text-xl focus:outline-none focus:ring-0)"
          type="text"
          value={inputText}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          className={`rounded-full p-2 border-2 border-black ${
            onFocus ? "border-blue-400 shadow-md ease-in-out" : ""
          }`}
          onClick={() => {
            if (inputText == "") {
              return;
            }
            dispatch(fetchWeatherData(inputText));
            setInputText("");
          }}
        >
          <img className="h-8" src={locationPin} alt="search-button" />
        </button>
      </div>
    </section>
  );
};

export default SearchBar;

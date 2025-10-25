import React from "react";
import WeatherDetailBox from "./WeatherDetailBox";

const WeatherBox = ({ weather }) => {
  const celsius = weather?.main.temp; // number
  const CELSIUS = `${celsius?.toFixed(1)}°C`; // string
  const fahrenheit = `${(celsius * 1.8 + 32).toFixed(1)}`; // string
  const FAHRENHEIT = `${fahrenheit}°F`; // string

  return (
    <div className="weather-box">
      <h1>
        {weather?.name}, {weather?.sys.country}
      </h1>
      <p>
        {CELSIUS} / {FAHRENHEIT}
      </p>
      <p>{weather?.weather[0].description}</p>
      <WeatherDetailBox weather={weather} />
    </div>
  );
};

export default WeatherBox;

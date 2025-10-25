import React from "react";
import WeatherDetailBox from "./WeatherDetailBox";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Thunderstorm from "../assets/Thunderstorm.svg";
import Drizzle from "../assets/Drizzle.svg";
import Rain from "../assets/Rain.svg";
import Snow from "../assets/Snow.svg";
import Atmosphere from "../assets/Atmosphere.svg";
import Clear from "../assets/Clear.svg";
import Clouds from "../assets/Clouds.svg";
import Mist from "../assets/Mist.svg";
import CurrentDate from "./CurrentDate";
import TempToggle from "./TempToggle";

const weatherImages = {
  Thunderstorm,
  Drizzle,
  Rain,
  Snow,
  Atmosphere,
  Clear,
  Clouds,
  Mist,
};

const WeatherBox = ({ weather }) => {
  const celsius = weather?.main.temp; // number
  const CELSIUS = `${celsius?.toFixed(1)}°`; // string
  const fahrenheit = `${(celsius * 1.8 + 32).toFixed(1)}`; // string
  const FAHRENHEIT = `${fahrenheit}°`; // string

  return (
    <div className="weather-box">
      <div className="flex-d-center">
        <h1 className="flex justify-center items-center gap-2 text-xl font-light tracking-wide mb-2">
          <MapPinIcon className="w-6" />
          {weather?.name}, {weather?.sys.country}
        </h1>
        <CurrentDate />
        <img
          src={weatherImages[weather?.weather[0].main]}
          alt={`${weather?.weather[0].description} icon`}
          className="w-80 m-4"
        />
      </div>

      <TempToggle weather={weather} cel={CELSIUS} fah={FAHRENHEIT} />

      <p className="capitalize font-extralight tracking-wide mt-3 mb-6">
        {weather?.weather[0].description}
      </p>
      <WeatherDetailBox weather={weather} />
    </div>
  );
};

export default WeatherBox;

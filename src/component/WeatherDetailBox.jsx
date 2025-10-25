import React from "react";
import WeatherDetailBoxItem from "./WeatherDetailBoxItem";

const WeatherDetailBox = ({ weather }) => {
  // Sunrise, Sunset 시간으로 변경
  const getFullTime = (unixTime, timezoneOffset) => {
    if (!unixTime || timezoneOffset === undefined) return "";
    const localTime = new Date((unixTime + timezoneOffset) * 1000);
    return localTime.toUTCString().slice(17, 22);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <WeatherDetailBoxItem
        title={"Temp Max"}
        value={`${weather?.main.temp_max}°`}
      />
      <WeatherDetailBoxItem
        title={"Temp Min"}
        value={`${weather?.main.temp_min}°`}
      />
      <WeatherDetailBoxItem
        title={"Sunrise"}
        value={getFullTime(weather?.sys.sunrise, weather?.timezone)}
      />
      <WeatherDetailBoxItem
        title={"Sunset"}
        value={getFullTime(weather?.sys.sunset, weather?.timezone)}
      />
      <WeatherDetailBoxItem title={"Wind"} value={weather?.wind.speed} />
      <WeatherDetailBoxItem title={"Humidity"} value={weather?.main.humidity} />
    </div>
  );
};

export default WeatherDetailBox;

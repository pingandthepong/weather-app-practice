import React from "react";
import WeatherDetailBoxItem from "./WeatherDetailBoxItem";

const WeatherDetailBox = ({ weather, unit }) => {
  // Sunrise, Sunset 시간으로 변경
  const getFullTime = (unixTime, timezoneOffset) => {
    if (!unixTime || timezoneOffset === undefined) return "";
    const localTime = new Date((unixTime + timezoneOffset) * 1000);
    return localTime.toUTCString().slice(17, 22);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <WeatherDetailBoxItem
        title={"🔺 Temp Max"}
        value={`${
          unit === "C"
            ? weather?.main.temp_max.toFixed(2)
            : (weather?.main.temp_max * 1.8 + 32).toFixed(2)
        }°`}
      />
      <WeatherDetailBoxItem
        title={"🔻 Temp Min"}
        value={`${
          unit === "C"
            ? weather?.main.temp_min.toFixed(2)
            : (weather?.main.temp_min * 1.8 + 32).toFixed(2)
        }°`}
      />
      <WeatherDetailBoxItem
        title={"☀️ Sunrise"}
        value={getFullTime(weather?.sys.sunrise, weather?.timezone)}
      />
      <WeatherDetailBoxItem
        title={"🌙 Sunset"}
        value={getFullTime(weather?.sys.sunset, weather?.timezone)}
      />
      <WeatherDetailBoxItem
        title={"💨 Wind"}
        value={`${weather?.wind.speed}km/h`}
      />
      <WeatherDetailBoxItem
        title={"💦 Humidity"}
        value={`${weather?.main.humidity}%`}
      />
    </div>
  );
};

export default WeatherDetailBox;

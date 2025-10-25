import React from "react";

const WeatherDetailBox = ({ weather }) => {
  console.log(weather?.timezone);

  const getFullTime = (unixTime, timezoneOffset) => {
    if (!unixTime || timezoneOffset === undefined) return "";

    const localTime = new Date((unixTime + timezoneOffset) * 1000);

    return localTime.toUTCString().slice(17, 22);
  };
  return (
    <div className="weather-detail-box-wrap">
      <div className="weather-detail-box">
        <h2>최고온도</h2>
        <p>{weather?.main.temp_max}</p>
      </div>
      <div className="weather-detail-box">
        <h2>최저온도</h2>
        <p>{weather?.main.temp_min}</p>
      </div>
      <div className="weather-detail-box">
        <h2>일출</h2>
        <p>{getFullTime(weather?.sys.sunrise, weather?.timezone)}</p>
      </div>
      <div className="weather-detail-box">
        <h2>일몰</h2>
        <p>{getFullTime(weather?.sys.sunset, weather?.timezone)}</p>
      </div>
      <div className="weather-detail-box">
        <h2>바람</h2>
        <p>{weather?.wind.speed}</p>
      </div>
      <div className="weather-detail-box">
        <h2>습도</h2>
        <p>{weather?.main.humidity}</p>
      </div>
    </div>
  );
};

export default WeatherDetailBox;

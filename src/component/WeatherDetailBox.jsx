import React from "react";

const WeatherDetailBox = ({ weather }) => {
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
        <p>{weather?.sys.sunrise}</p>
      </div>
      <div className="weather-detail-box">
        <h2>일몰</h2>
        <p>{weather?.sys.sunset}</p>
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

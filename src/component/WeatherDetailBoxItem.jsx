import React from "react";

const WeatherDetailBoxItem = ({ weather, title, value }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-5 py-2.5 rounded-2xl backdrop-blur-md border bg-white/10 border-white/20">
        <h2 className="text-white/70 text-base">{title}</h2>
        <p className="text-white text-lg">{value}</p>
      </div>
    </div>
  );
};

export default WeatherDetailBoxItem;

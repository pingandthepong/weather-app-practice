import React, { useState, useEffect } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const WeatherButton = ({ cities, city, setCity }) => {
  return (
    <div className="fixed bottom-0 px-4 py-4 w-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] overflow-x-auto scrollbar-hide border-t-1 border-white/25">
      <div className="flex gap-3 snap-x snap-mandatory w-max scroll-smooth">
        <button
          className={`snap-center flex justify-center items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-md border transition-all whitespace-nowrap text-lg cursor-pointer  ${
            city === ""
              ? "bg-white/25 border-white/40 text-white"
              : "bg-white/10 border-white/20 text-white/70"
          }`}
          onClick={() => {
            setCity("");
          }}>
          <PaperAirplaneIcon className="w-5 rotate-320 -translate-y-0.5" />
          Current
        </button>

        {cities.map((c, idx) => (
          <button
            className={`snap-center flex justify-center items-center px-5 py-2.5 rounded-full backdrop-blur-md border transition-all whitespace-nowrap text-lg cursor-pointer hover:bg-white/15 ${
              city === c
                ? "bg-white/25 border-white/40 text-white"
                : "bg-white/10 border-white/20 text-white/70"
            }`}
            key={idx}
            onClick={() => {
              setCity(c);
            }}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeatherButton;

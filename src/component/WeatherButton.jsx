import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const WeatherButton = ({ cities, city, setCity }) => {
  return (
    <div className="px-6 py-8">
      <div className="flex gap-3 overflow-x-auto  scrollbar-hide">
        <Button
          className={`relative flex justify-center items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-md border transition-all whitespace-nowrap text-lg cursor-pointer  ${
            city === ""
              ? "bg-white/25 border-white/40 text-white"
              : "bg-white/10 border-white/20 text-white/70"
          }`}
          onClick={() => {
            setCity("");
          }}>
          <PaperAirplaneIcon className="w-5 rotate-320 -translate-y-0.5" />
          Current
        </Button>

        {cities.map((c, idx) => (
          <Button
            className={`relative flex justify-center items-center px-5 py-2.5 rounded-full backdrop-blur-md border transition-all whitespace-nowrap text-lg cursor-pointer hover:bg-white/15 ${
              city === c
                ? "bg-white/25 border-white/40 text-white"
                : "bg-white/10 border-white/20 text-white/70"
            }`}
            key={idx}
            onClick={() => {
              setCity(c);
            }}>
            {c}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WeatherButton;

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, city, setCity }) => {
  return (
    <div>
      <Button
        variant={city === "" ? "primary" : "warning"}
        onClick={() => {
          setCity("");
        }}>
        Current
      </Button>

      {cities.map((c, idx) => (
        <Button
          key={idx}
          variant={city === c ? "primary" : "warning"}
          onClick={() => {
            setCity(c);
          }}>
          {c}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;

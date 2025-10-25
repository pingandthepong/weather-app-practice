import React, { useState, useEffect } from "react";
import ToggleItem from "./ToggleItem";

const TempToggle = ({ cel, fah, unit, setUnit }) => {
  return (
    <>
      <ul className="inline-flex justify-center items-center gap-1 mb-4 p-1 rounded-full backdrop-blur-md border transition-all whitespace-nowrap bg-white/10 border-white/20 text-white/70">
        <ToggleItem
          name="°C"
          status={unit === "C" ? "active" : null}
          onClick={() => setUnit("C")}
        />
        <ToggleItem
          name="°F"
          status={unit === "F" ? "active" : null}
          onClick={() => setUnit("F")}
        />
      </ul>
      <p className="text-7xl font-medium mb-2">{unit === "C" ? cel : fah}</p>
    </>
  );
};

export default TempToggle;

import React, { useState, useEffect } from "react";
import ToggleItem from "./ToggleItem";

const TempToggle = ({ weather, cel, fah }) => {
  const [unit, setUnit] = useState(cel);

  return (
    <>
      <ul className="inline-flex justify-center items-center gap-1 mb-4 p-1 rounded-full backdrop-blur-md border transition-all whitespace-nowrap bg-white/10 border-white/20 text-white/70">
        <ToggleItem
          name="°C"
          status={unit === cel ? "active" : null}
          onClick={() => setUnit(cel)}
        />
        <ToggleItem
          name="°F"
          status={unit === fah ? "active" : null}
          onClick={() => setUnit(fah)}
        />
      </ul>
      <p className="text-7xl font-medium mb-2">{unit === cel ? cel : fah}</p>
    </>
  );
};

export default TempToggle;

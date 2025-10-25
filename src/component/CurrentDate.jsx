import React, { useState, useEffect } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

const CurrentDate = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const year = currentTime.getFullYear();
  const month = currentTime.getMonth() + 1;
  const date = currentTime.getDate();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[currentTime.getDay()];
  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const seconds = String(currentTime.getSeconds()).padStart(2, "0");

  return (
    <>
      <p className="flex justify-center items-center gap-2 font-extralight text-base opacity-80">
        {`${year}. ${month}. ${date}. ${day}`}
        <span className="flex gap-0.5 tracking-wider">
          <ClockIcon className="w-4" />
          {`${hours}:${minutes}:${seconds}`}
        </span>
      </p>
    </>
  );
};

export default CurrentDate;

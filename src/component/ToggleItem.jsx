import React, { useState } from "react";

const ToggleItem = ({ name, onClick, status }) => {
  return (
    <li
      onClick={onClick}
      className={`px-5 py-2 rounded-full cursor-pointer transition-all ${
        status === "active" && "bg-white/25 text-white"
      } `}>
      {name}
    </li>
  );
};

export default ToggleItem;

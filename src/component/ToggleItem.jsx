import React, { useState } from "react";

const ToggleItem = (props) => {
  return (
    <li
      onClick={props.onClick}
      className={`px-5 py-2 rounded-full cursor-pointer transition-all ${
        props.status === "active" && "bg-white/25 text-white"
      } `}>
      {props.name}
    </li>
  );
};

export default ToggleItem;

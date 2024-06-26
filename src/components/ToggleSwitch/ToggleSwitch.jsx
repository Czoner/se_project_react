import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import CurrentTempatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTempatureUnitContext
  );

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch_box"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider_F"
            : "switch__slider switch__slider_C"
        }
      ></span>
      <p
        className={`switch__temp_F ${
          currentTemperatureUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp_C ${
          currentTemperatureUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;

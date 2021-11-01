import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="Temperature">{props.temp}</span>
        <span className="unit">°C</span> |{" "}
        <span className="Farenheit">
          <a href="/" rel="noreferrer" onClick={convertToF}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let farenheitTemp = Math.round((props.temp * 9) / 5 + 32);
    return (
      <span className="WeatherTemperature">
        <span className="Temperature">{farenheitTemp}</span>
        <span className="unit">
          <a href="/" rel="noreferrer" onClick={convertToC}>
            °C
          </a>
        </span>{" "}
        | <span className="Farenheit">°F</span>
      </span>
    );
  }
}

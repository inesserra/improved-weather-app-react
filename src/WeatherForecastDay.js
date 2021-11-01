import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    return Math.round(props.data.temp.max);
  }
  function minTemp() {
    return Math.round(props.data.temp.min);
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecastDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="MinMax">
        <span className="max"> {maxTemp()}° </span>
        <span className="min"> {minTemp()}°</span>
      </div>
    </div>
  );
}

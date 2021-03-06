import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="row MainDisplay">
      <div className="col-4">
        <span className="float-left">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={45}
          />
        </span>
        <WeatherTemperature temp={props.data.temperature} />
      </div>
      <div className="col-4">
        <ul className="RainWind">
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>
        </ul>
      </div>
      <div className="col-4 CurrentTime">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormatDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
    </div>
  );
}

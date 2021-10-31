import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="row MainDisplay">
      <div className="col-4">
        <img src={props.data.iconUrl} alt="weather icon" />
        <span className="Temperature">{props.data.temperature}</span>
        <span className="Celsius">°C</span> |{" "}
        <span className="Farenheight">°F</span>
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

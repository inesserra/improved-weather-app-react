import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />{" "}
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />{" "}
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather icon"
          />
          <span>14</span>
          <span>°C</span> | <span>°F</span>
        </div>
        <div className="col-3">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 90%</li>
            <li>Wind: 11mph</li>
          </ul>
        </div>
        <div className="col-6">
          <h1>New York</h1>
          <ul>
            <li>Saturday 14:33</li>
            <li>Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

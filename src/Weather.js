import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconId: response.data.weather[0].icon,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Saturday 16:28",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />{" "}
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 Button"
              />{" "}
            </div>
          </div>
        </form>
        <div className="row MainDisplay">
          <div className="col-4">
            <img src={weatherData.iconUrl} alt="weather icon" />
            <span className="Temperature">{weatherData.temperature}</span>
            <span className="Celsius">°C</span> |{" "}
            <span className="Farenheight">°F</span>
          </div>
          <div className="col-4">
            <ul className="RainWind">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
          <div className="col-4 CurrentTime">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8f3eca2ec14098a615b00621ad86d76d";
    let city = "New York";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}
  `;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}

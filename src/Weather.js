import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { BeatLoader } from "react-spinners";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.DefaultCity);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      iconId: response.data.weather[0].icon,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
    console.log(weatherData.date);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function setNewCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "8f3eca2ec14098a615b00621ad86d76d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}
    `;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={setNewCity}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <BeatLoader color="#4A90E2" loading={true} css="" size={15} />;
  }
}

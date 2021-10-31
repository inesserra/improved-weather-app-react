import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather DefaultCity="New York" />
        <footer>
          <a
            href="https://github.com/inesserra/improved-weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Ines Serra
        </footer>
      </div>
    </div>
  );
}

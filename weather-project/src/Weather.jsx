import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./index.css";

export default function Form() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "10c5d8914570afc762860ce8c19cc5b2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>

      {weather.ready && (
        <ul className="tempList">
          <li>Temperature: {Math.round(weather.temperature)}°F</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} mph</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      )}
    </div>
  );
}

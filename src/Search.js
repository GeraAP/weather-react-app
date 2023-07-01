import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `6643c7326a4c2a38838264a28531d97e`;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>{Math.round(weather.temperature)}°C</li>
          <li>{weather.description}</li>
          <li>
            <img src={weather.icon} alt="Weather.description" />
          </li>
          <li>💧Humidity: {Math.round(weather.temperature)}%</li>
          <li>🍃Wind: {Math.round(weather.temperature)}km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

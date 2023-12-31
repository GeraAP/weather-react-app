import React from "react";
import "./styles.css";

export default function Forecast() {
  return (
    <div className="Header">
      <h1 className="city" id="city-input">
        {" "}
        Krakow{" "}
      </h1>
      <ul className="day-time-weather">
        <li className="day-time">
          <span id="current-date">Thursday 10:57</span>
        </li>
        <li>
          <span id="description"> Sunny</span>
        </li>
      </ul>
      <div className="row">
        <div class="col-6 weather-temp">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
            alt=""
            className="weather-icon"
            id="big-icon"
          />

          <span className="temperature-big" id="temperature-link">
            32
          </span>
          <span className="units">°C</span>
        </div>

        <div className="col-6">
          <ul className="weather-extra-info">
            <li>
              Humidity:<span id="humidity">20</span>%
            </li>
            <li>
              Wind: <span id="wind">12 </span> mph
            </li>
            <li>
              Feels like: <span id="real-feel">27</span>°C
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

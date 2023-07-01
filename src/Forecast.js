import React from "react";
import "./index";
import "./styles.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container weekly-forecast">
        <div className="row">
          <div className="col">Mon</div>
          <div className="col">Tue</div>
          <div className="col">Wed</div>
          <div className="col">Thu</div>
          <div className="col">Fri</div>
          <div className="col">Sat</div>
        </div>
        <div className="row">
          <div className="col">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt=""
              width="80px"
            />{" "}
          </div>
          <div className="col">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt=""
              width="80px"
            />{" "}
          </div>{" "}
          <div className="col">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt=""
              width="80px"
            />{" "}
          </div>{" "}
          <div className="col">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt=""
              width="80px"
            />{" "}
          </div>{" "}
          <div className="col">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt=""
              width="80px"
            />{" "}
          </div>{" "}
          <div className="col">
            {" "}
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt=""
              width="80px"
            />{" "}
          </div>
        </div>

        <div className="row">
          <div className="col"> 31° | 17°</div>
          <div className="col">29° | 17°</div>
          <div className="col">26° | 17°</div>
          <div className="col">24° | 14°</div>
          <div className="col">25° | 14°</div>
          <div className="col">26° | 14°</div>
        </div>
      </div>
    </div>
  );
}

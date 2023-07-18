import React from "react";
import "../styles/WeatherDisplay.css";

export const WeatherDisplay = (props) => {
  const weatherCondition = {
    sunny: "☀️",
    cloudy: "🌥",
    stormy: "⛈",
    rainy: "🌧",
  };
  const celsuis = String.fromCharCode(176) + "C";
  const speedUnit = "km/h";
  const displayHourlyData = () => {
    props.setHourlyDate(props.day);
  };
  return (
    <div className="card__frame">
      <div className="card__body">
        <div className="card__contents">
          <div>{props.day.substring(0, 3)}</div>
          <div className="condition__indicator">
            {weatherCondition[props.conditions]}
          </div>
          <div>
            {props.conditions.charAt(0).toUpperCase()}
            {props.conditions.slice(1)}
          </div>
          <div>
            Max {props.maxTemp}
            {celsuis}
          </div>
          <div>
            {props.wind}
            {speedUnit}
          </div>
          <div className="heat__indicator">
            {" "}
            {props.maxTemp >= 35 ? "Heatwave warning" : ""}
          </div>
          <div className="wind__indicator">
            {" "}
            {props.wind >= 30 ? "Strong wind warning" : ""}
          </div>
          <div className="btn__hourly__body">
            <button
              className="btn__hourly__content"
              onClick={displayHourlyData}
            >
              Hourly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

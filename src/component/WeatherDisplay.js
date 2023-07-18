import React from "react";
import "../styles/WeatherDisplay.css";

export const WeatherDisplay = (props) => {
  const celsuis = String.fromCharCode(176) + "C";
  const speedUnit = "km/h"
  return (
    <div className="card__body">
      <div className="card__contents">
        <div>☀️</div>
        <div>{props.day.substring(0, 3)}</div>
        <div>
          {props.conditions.charAt(0).toUpperCase()}
          {props.conditions.slice(1)}
        </div>
        <div>
          {props.maxTemp}
          {celsuis}
        </div>
        <div>{props.wind}{speedUnit}</div>
        <div className="heat__indicator"> {props.maxTemp >= 35 ?"Heatwave warning" : ""}</div>
        <div className="wind__indicator"> {props.wind >= 30 ? "Strong wind warning" : ""}</div>
      </div>
    </div>
  );
};

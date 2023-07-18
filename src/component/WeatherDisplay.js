import React from "react";
import "../styles/WeatherDisplay.css";

export const WeatherDisplay = (props) => {
  // Define weather condition icons
  const weatherCondition = {
    sunny: "☀️",
    cloudy: "🌥",
    stormy: "⛈",
    rainy: "🌧",
  };

  // Define temperature and wind speed units
  const celsius = String.fromCharCode(176) + "C";
  const speedUnit = "km/h";

  // Handle displaying hourly data
  const displayHourlyData = () => {
    props.setHourlyDate(props.day);
  };

  return (
    <div className="card__frame">
      <div className="card__body">
        <div className="card__contents">
          {/* Display the day */}
          <div>{props.day.substring(0, 3)}</div>

          {/* Display weather condition icon */}
          <div className="condition__indicator">
            {weatherCondition[props.conditions]}
          </div>

          {/* Display capitalized weather condition */}
          <div>
            {props.conditions.charAt(0).toUpperCase()}
            {props.conditions.slice(1)}
          </div>

          {/* Display maximum temperature */}
          <div>
            Max {props.maxTemp}
            {celsius}
          </div>

          {/* Display wind speed */}
          <div>
            {props.wind}
            {speedUnit}
          </div>

          {/* Display heatwave warning if applicable */}
          <div className="heat__indicator">
            {props.maxTemp >= 35 ? "Heatwave warning" : ""}
          </div>

          {/* Display strong wind warning if applicable */}
          <div className="wind__indicator">
            {props.wind >= 30 ? "Strong wind warning" : ""}
          </div>

          {/* Button to display hourly data */}
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

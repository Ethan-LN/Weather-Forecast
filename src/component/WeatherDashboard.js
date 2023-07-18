import { forecastData } from "../WeatherData";
import React from "react";
import { WeatherDisplay } from "./WeatherDisplay";
import DailyLineChart from "./DailyLineChart";
import "../styles/WeatherDashboard.css"



export const WeatherDashboard = () => {
  return (
    <div className="title">
      <h2>Weather Forecast</h2>
      <div className="cards__panel">
        {forecastData.map((data) => (
          <WeatherDisplay
            day={data.day}
            conditions={data.conditions}
            maxTemp={data.maxTemp}
            wind={data.wind}
          />
        ))}
      </div>
      <div className="hourly__display">
      <DailyLineChart />
      </div>
    </div>
  );
};

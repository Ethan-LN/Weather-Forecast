import { forecastData } from "../WeatherData";
import React, { useEffect, useState } from "react";
import { WeatherDisplay } from "./WeatherDisplay";
import DailyLineChart from "./DailyLineChart";
import "../styles/WeatherDashboard.css";


export const WeatherDashboard = () => {
  const [hourlyData, setHourlyData] = useState("");
  const [hourlyDate, setHourlyDate] = useState("monday");
  useEffect(()=>{
    forecastData.map((data) => {
      if(data.day===hourlyDate) {
        setHourlyData(data.hourlyTemp)
        console.log("this is hourly data "+ hourlyData + data.day);
      }
    });
  },[hourlyDate,hourlyData])


  return (
    <div className="title">
      <h2>Weather Forecast</h2>
      <div className="cards__panel">
        {forecastData.map((data) => (
          <WeatherDisplay
            key={data.id}
            id={data.id}
            day={data.day}
            conditions={data.conditions}
            maxTemp={data.maxTemp}
            wind={data.wind}
            hourlyDate={hourlyDate}
            setHourlyDate={setHourlyDate}
          />
        ))}
      </div>
      <div className="hourly__display">
        <DailyLineChart/>
      </div>
    </div>
  );
};

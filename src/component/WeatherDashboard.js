import { forecastData } from "../WeatherData";
import React, { useEffect, useState } from "react";
import { WeatherDisplay } from "./WeatherDisplay";
import DailyLineChart from "./DailyLineChart";
import "../styles/WeatherDashboard.css";

export const WeatherDashboard = () => {
  // Function to process hourly temperature and wind speed data
  const processData = (hourlyTemp, hourlyWind) => {
    const dataArray = hourlyTemp.map((temp, index) => ({
      name: index + 1,
      MaxTemp: temp,
      Wind: hourlyWind[index],
    }));

    return dataArray;
  };

  // State variables
  const [hourlyData, setHourlyData] = useState(
    processData(forecastData[4].hourlyTemp, forecastData[4].hourlyWind)
  );
  const [hourlyDate, setHourlyDate] = useState("friday");

  // Effect to update the hourly data when the selected date changes
  useEffect(() => {
    forecastData.map((data) => {
      if (data.day === hourlyDate) {
        const chartData = processData(data.hourlyTemp, data.hourlyWind);
        console.log("Processed data", chartData);
        setHourlyData(chartData);
      }
      return null;
    });
  }, [hourlyDate, hourlyData]);

  return (
    <div className="title">
      <h2>Weather Forecast</h2>
      <div className="cards__panel">
        {/* Render weather display cards */}
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
        {/* Render daily line chart */}
        <DailyLineChart data={hourlyData} />
      </div>
    </div>
  );
};

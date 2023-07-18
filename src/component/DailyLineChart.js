import React from "react";
import "../styles/DailyLineChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function DailyLineChart(props) {
  return (
    <div className="Line__Chart">
      {/* Render the line chart */}
      <LineChart
        width={900}
        height={250}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        {/* Define X-axis */}
        <XAxis dataKey="name" />

        {/* Define Y-axis */}
        <YAxis />

        {/* Display tooltips on hover */}
        <Tooltip />

        {/* Display legend */}
        <Legend />

        {/* Render line for maximum temperature */}
        <Line
          type="monotone"
          dataKey="MaxTemp"
          stroke="red"
          activeDot={{ r: 8 }}
        />

        {/* Render line for wind speed */}
        <Line type="monotone" dataKey="Wind" stroke="violet" />
      </LineChart>
    </div>
  );
}

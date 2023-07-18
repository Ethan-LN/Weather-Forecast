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
import { data } from "./LineChartData";
export default function DailyLineChart(props) {
  return (
    <div className="Line__Chart">
      <LineChart
        width={900}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="MaxTemp"
          stroke="red"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Wind" stroke="violet" />
      </LineChart>
    </div>
  );
}

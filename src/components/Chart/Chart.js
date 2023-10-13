import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.datapoints.map((dp) => dp.value);
  const dpMaxValue = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.datapoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={dpMaxValue}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;

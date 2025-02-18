import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const LineChart = ({ id, labelX = 'labelX', labelY = 'labelY', data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById(id).getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: labelX,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: labelY,
            },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      className="chart-container"
      style={{ position: "relative", height: "40vh", width: "100%" }}>
      <canvas id={id}></canvas>
    </div>
  );
};

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const PieChart = ({ id, data, type = 'pie' }) => {
    const chartRef = useRef(null);
    
      useEffect(() => {
        const ctx = document.getElementById(id).getContext("2d");
    
        if (chartRef.current) {
          chartRef.current.destroy();
        }
    
        chartRef.current = new Chart(ctx, {
          type: type,
          data: data
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
      <canvas style={{margin: '0 auto'}} id={id}></canvas>
    </div>
  )
}

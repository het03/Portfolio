"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function RadarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "radar",
        data: {
          labels: ["JavaScript", "HTML/CSS", "React.js", "TypeScript", "Tailwind", "Angular", "React Native", "Figma", "C/C++", "Python"],
          datasets: [
            {
              label: "Proficiency",
              data: [80, 100, 85, 80, 100, 70, 75, 100, 85, 85],
              backgroundColor: ["rgb(192, 192, 192, 0.2)"],
              borderColor: ["rgb(0, 0, 0)"],
              borderWidth: 1,
            }
          ],
        },
        options: {
          responsive: true,
          scales: {
            r: {
              pointLabels: {
                font: {
                  size: 16, 
                  weight: 700,
                },
              },
              ticks: {
                font: {
                  size: 14,
                  weight: 700,
                },
              },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <div style={{display:'flex', justifyContent:'center', height:'80vh', width:'60vw'}}>
      <canvas ref={chartRef}/>
    </div>
  );
}
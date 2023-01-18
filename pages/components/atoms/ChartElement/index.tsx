import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);
const ChartElement = () => {
  const labels = ["blair", "alice", "john", "ann"];
  const data = {
    labels: labels,
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          drawTicks: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawTicks: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
  };
  return <Bar data={data} options={options} />;
};

export default ChartElement;

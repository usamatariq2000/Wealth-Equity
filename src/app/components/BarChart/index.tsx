import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const data: ChartData<"bar"> = {
    labels: ["You (Eugene)", "Black", "Latino", "Asian", "White"],
    datasets: [
      {
        label: "Your Coverage",
        backgroundColor: "#E3E572",
        data: [150000, 0, 0, 0, 0],
      },
      {
        label: "Your Annual Income",
        backgroundColor: "#C5CE85",
        data: [300000, 0, 0, 0, 0],
      },
      {
        label: "Coverage by Race",
        backgroundColor: "#5B8C88",
        data: [0, 133500, 205000, 825300, 1550000],
      },
      {
        label: "Lifetime Income by Race",
        backgroundColor: "#03433B",
        data: [0, 500000, 1250000, 2000000, 3000000],
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${(value as number) / 1000}K`;
          },
        },
      },
    },
  };

  return (
    <Bar data={data} options={options} className="" />
  );
};

export default BarChart;

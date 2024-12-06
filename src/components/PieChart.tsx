// components/PieChart.tsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      hoverBackgroundColor: string[];
    }[];
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  return (
    <div className="p-4 border rounded shadow-sm bg-gray-50">
      <h3 className="text-lg font-semibold mb-2">User Roles Distribution</h3>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

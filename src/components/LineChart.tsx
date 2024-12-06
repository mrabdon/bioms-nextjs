// components/LineGraph.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

interface LineGraphProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      tension: number;
    }[];
  };
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  return (
    <div className="p-4 border rounded shadow-sm bg-gray-50">
      <h3 className="text-lg font-semibold mb-2">Monthly Activity</h3>
      <Line data={data} />
    </div>
  );
};

export default LineGraph;

import React from "react";

interface OverviewBoxProps {
  icon: React.ReactNode; // JSX elements or components
  color: string; // Background color as a string
  title: string; // Title text
  count: number; // Count as a number
  formattedCount: string; // Count as a number
}

const OverviewBox: React.FC<OverviewBoxProps> = ({
  icon,
  color,
  title,
  count,
  formattedCount,
}) => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-xl p-4 w-full min-w-[150px]">
      <div
        className="flex items-center justify-center h-12 w-12 rounded-full"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">Total</p>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p>{formattedCount}</p>
      </div>
      <div className="ml-auto  font-medium text-gray-700">{count}</div>
    </div>
  );
};

export default OverviewBox;

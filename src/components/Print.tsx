"use client"; // This tells Next.js to treat this as a Client Component

import React from "react";

type PrintProps = {
  children: React.ReactNode;
};

const Print: React.FC<PrintProps> = ({ children }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 print:hidden">
        <h1 className="text-2xl font-bold text-gray-800">Printable Content</h1>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-gradient-to-b from-purple-500 to-purple-700 text-white text-sm font-medium rounded-md hover:from-purple-500 hover:to-purple-800"
        >
          Print
        </button>
      </div>
      {/* Printable Content */}
      <div className="printable-content">{children}</div>
    </div>
  );
};

export default Print;

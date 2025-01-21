"use client";
import { ReactNode, useState } from "react";

interface Column {
  header: string;
  accessor: string;
  className?: string;
}

interface TableProps {
  columns: Column[];
  data: any[];
  renderRow?: (item: any) => ReactNode; // Optional custom row rendering
  onSort?: (accessor: string, order: "asc" | "desc" | "") => void; // Sorting callback
}

const Tables: React.FC<TableProps> = ({ columns, data, renderRow, onSort }) => {
  const [sortState, setSortState] = useState<{
    accessor: string;
    order: "asc" | "desc" | "";
  }>({
    accessor: "",
    order: "",
  });

  const toggleSort = (accessor: string) => {
    const newOrder =
      sortState.accessor === accessor && sortState.order === "asc"
        ? "desc"
        : "asc";
    setSortState({ accessor, order: newOrder });
    onSort?.(accessor, newOrder);
  };

  const getSortIcon = (accessor: string) => {
    if (sortState.accessor !== accessor) return "";
    return sortState.order === "asc" ? "▲" : "▼";
  };

  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          {columns.map((column) => (
            <th
              key={column.accessor}
              className={`p-4 text-left font-bold ${column.className}`}
              onClick={() => toggleSort(column.accessor)}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                {column.header} <span>{getSortIcon(column.accessor)}</span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) =>
          renderRow ? (
            renderRow(item) // Custom row rendering
          ) : (
            <tr
              key={index}
              className="border-b border-gray-200 even:bg-gray-50"
            >
              {columns.map((column) => (
                <td key={column.accessor} className={`p-4 ${column.className}`}>
                  {item[column.accessor]}
                </td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Tables;

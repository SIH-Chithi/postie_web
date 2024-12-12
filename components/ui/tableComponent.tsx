// src/components/ui/TableComponent.tsx

import React from "react";

interface TableComponentProps {
  data: Record<string, any>[]; // Array of objects with dynamic keys
}

const TableComponent1: React.FC<TableComponentProps> = ({ data }) => {
    if (!data || data.length === 0) {
        return <div className="text-center text-gray-500">No data available</div>;
      }

  // Dynamically generate headers from the keys of the first object in the data array
  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header) => (
              <th
                key={header}
                className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700"
              >
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {headers.map((header) => (
                <td
                  key={header}
                  className="border border-gray-200 px-4 py-2 text-sm text-gray-600"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent1;

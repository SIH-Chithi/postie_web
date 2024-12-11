import React from "react";

type stausProps = {
  iconBg: string;
  icon: React.ReactNode;
  label: string;
  value: number;
  growth: string;
};

interface IStats {
  items: stausProps[];
}

function DashBoard_Status_Number({ items }: IStats) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4 w-full">
      {items.map((state, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200 ease-in-out flex items-center justify-between space-x-3"
        >
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${state.iconBg} text-white`}
          >
            {state.icon}
          </div>
          <div className="flex flex-col justify-between space-y-1">
            <p className="text-xs font-medium text-gray-600">{state.label}</p>
            <p className="text-lg font-semibold text-gray-800">{state.value}</p>
            <p
              className={`text-xs font-medium ${
                state.growth.includes("-") ? "text-red-500" : "text-green-500"
              }`}
            >
              {state.growth}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashBoard_Status_Number;

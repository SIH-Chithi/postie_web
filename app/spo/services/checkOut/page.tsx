// Page.tsx
import React from "react";
import ContainerDetails from "@/components/Container"; 
import { FaBox } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";

const Page = () => {
  const containerData = [
    {
      containerId: "C123456",
      totalConsignments: 120,
      checkInDate: "2024-11-25",
      location: "NSH Delhi",
      notes: "This container is scheduled for transfer to Mumbai by 2024-11-27.",
    },
    {
      containerId: "C123457",
      totalConsignments: 130,
      checkInDate: "2024-11-26",
      location: "HPO Delhi",
      notes: "This container has been delivered to Chennai.",
    },
    {
      containerId: "C123458",
      totalConsignments: 150,
      checkInDate: "2024-11-27",
      location: "NSH Mumbai",
      notes: "This container is scheduled for transfer to Bangalore.",
    },
  ];

  return (
    <div className="min-h-screen bg-screenBackgroundColor p-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-lg">
            <FaBox className="h-8 w-8" />
          </div>
          <div className="ml-6">
            <span className="block text-sm font-medium text-gray-500">
              Today's Total Check-Out
            </span>
            <strong className="text-2xl font-semibold text-green-500">+500</strong>
          </div>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-orange-500 text-white shadow-lg">
            <FaBoxesPacking className="h-8 w-8" />
          </div>
          <div className="ml-6">
            <span className="block text-sm font-medium text-gray-500">
              Old Check-Out
            </span>
            <strong className="text-2xl font-semibold text-orange-500">+1000</strong>
          </div>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-500 text-white shadow-lg">
            <FaBoxesPacking className="h-8 w-8" />
          </div>
          <div className="ml-6">
            <span className="block text-sm font-medium text-gray-500">
              Total Check-Out
            </span>
            <strong className="text-2xl font-semibold text-blue-500">+1500</strong>
          </div>
        </div>
      </div>

      {/* Search Input Section */}
      <div className="mt-8">
        <div className="relative justify-center mx-auto w-3/5 gap-4 flex items-center">
          <input
            type="text"
            placeholder="Check-In by Container ID"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryColor focus:ring-2 focus:ring-blue-200 transition"
          />
          <button className="px-6 py-3 bg-primaryColor text-white rounded-lg hover:bg-red-700 transition">
            Search
          </button>
        </div>
      </div>

      
      <div className="mt-10 overflow-y-auto max-h-[500px]">
        {containerData.length > 0 ? (
          containerData.map((container) => (
            <ContainerDetails key={container.containerId} container={container} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <FaBox className="text-gray-400 w-16 h-16 mb-4" />
            <p className="text-lg font-medium text-gray-600">No Data Available</p>
            <p className="text-sm text-gray-500">No containers to display at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

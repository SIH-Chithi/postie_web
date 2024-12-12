// Page.tsx
import React from "react";
import ContainerDetails from "@/components/Container";
import { FaBox } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { Linechart } from "@/components/LineChart";
import { CheckBar } from "@/components/CheckBar";
import { CheckRadial } from "@/components/Checkradial";
import { FaArchive } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";

const Page = () => {
  const LineData = [
    { day: "Monday", parcel: 160, document: 90, express : 200, letter: 70 },
    { day: "Tuesday", parcel: 200, document: 100, express : 220, letter: 80 },
    { day: "Wednesday", parcel: 150, document: 110, express : 230, letter: 90 },
    { day: "Thursday", parcel: 250, document: 130, express : 240, letter: 100 },
    { day: "Friday", parcel: 300, document: 160, express : 260, letter: 120 },
    { day: "Saturday", parcel: 350, document: 190, express : 280, letter: 140 },
    { day: "Sunday", parcel: 400, document: 210, express : 300, letter: 170 },
    
  ];

  const chartData = [
    { date: "2024-07-15", check: 250 },
    { date: "2024-07-16", check: 300 },
    { date: "2024-07-17", check: 500 },
    { date: "2024-07-18", check: 200 },
    { date: "2024-07-19", check: 600 },
    { date: "2024-07-20", check: 410 },
  ]

  const serviceData =[
  
  {
    name: "Economy",
    value: 40,
    fill: "#fbe1e1"
  },{
    name: "Priority",
    value: 22,
    fill: "#F7C2C1"
  },{
    name: "Regular",
    value: 10,
    fill: "#ff7976"
  },{
    name: "Express",
    value: 19,
    fill: "#ff5754"
  }]

  const containerData = [
    {
      containerId: "C123456",
      totalConsignments: 110,
      checkInDate: "2024-11-25",
      location: "NSH Delhi",
      notes: "This container is scheduled for transfer to Mumbai by 2024-11-27.",
    },
    {
      containerId: "C123457",
      totalConsignments: 100,
      checkInDate: "2024-11-26",
      location: "HPO Delhi",
      notes: "This container has been delivered to Chennai.",
    },
    {
      containerId: "C123458",
      totalConsignments: 110,
      checkInDate: "2024-11-27",
      location: "NSH Mumbai",
      notes: "This container is scheduled for transfer to Bangalore.",
    },
  ];

  return ( 
    <div className="min-h-screen overflow-y-auto max-h-screen bg-gray-100 p-6 md:p-8">
      {/* Dashboard Section */}
      <div className="grid  lg:grid-cols-[4fr,6fr] gap-6">
        {/* Cards Section */}
        <div className="grid grid-rows-2 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all flex items-center">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-red-400 text-white">
                <FaBox className="text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Today's Check-Out</p>
                <p className="text-2xl font-bold text-red-400">+200</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all flex items-center">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-orange-500 text-white">
                <FaBoxOpen className="text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Old Check-Out</p>
                <p className="text-2xl font-bold text-orange-500">+800</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all flex items-center">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-yellow-500 text-white">
                <FaArchive className="text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Monthly</p>
                <p className="text-2xl font-bold text-yellow-500">+1200</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all flex items-center">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-red-700 text-white">
                <FaBoxesPacking className="text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Weekly</p>
                <p className="text-2xl font-bold text-red-700">+100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">

          <CheckBar data={chartData} heading="Check Out" />
      </div>
        
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[5fr,5fr]">
        {/* Line Chart Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          
          <Linechart chartData={LineData} />
        </div>
        
      <div className="bg-white p-6  rounded-lg shadow">
          <CheckRadial chartData={serviceData} />
      </div>
      </div>

      {/* Search Section */}
      <div className="mt-8 flex justify-center">
        <div className="flex w-full  items-center gap-4">
          <input
            type="text"
            placeholder="Check-out by Container ID"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700">
            Search
          </button>
        </div>
      </div>

      {/* Container Details Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow max-h-[400px] overflow-y-auto">
        {containerData.length > 0 ? (
          containerData.map((container) => (
            <ContainerDetails key={container.containerId} container={container} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <FaBox className="text-gray-400 text-4xl mb-4" />
            <p className="text-lg font-medium text-gray-600">No Data Available</p>
            <p className="text-sm text-gray-500">No containers to display at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
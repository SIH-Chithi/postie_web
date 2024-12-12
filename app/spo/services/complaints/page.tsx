import React from "react";
import ContainerDetails from "@/components/Container";
import { FaBox } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { Linechart } from "@/components/LineChart";
import { CheckBar } from "@/components/CheckBar";
import { CheckRadial } from "@/components/Checkradial";
import { FaArchive } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import DashBoard_Status_Number from "@/components/reusable/DashBoard_Status_Number";
import { IoBagHandle } from "react-icons/io5";
import { ComplaintLinechart } from "@/components/ComplaintLineChart";
import { ComplaintPiechart } from "@/components/ComplaintPieChart";
import { GrCompliance } from "react-icons/gr";
import { VscCommentUnresolved } from "react-icons/vsc";
import { MdPendingActions } from "react-icons/md";
import { FaClipboardQuestion } from "react-icons/fa6";
import { IoTimerSharp } from "react-icons/io5";

const Page = () => {
  const items = [
    {
      iconBg: "bg-red-400",
      icon: <IoBagHandle className="text-2xl text-white" />,
      label: "Total Complaints",
      value: 25,
      growth: "+2",
    },
    {
      iconBg: "bg-yellow-500",
      icon: <GrCompliance className="text-2xl text-white" />,
      label: "Resolved Complaints",
      value: 12,
      growth: "+1",
    },
    {
      iconBg: "bg-blue-600",
      icon: <MdPendingActions className="text-2xl text-white" />,
      label: "Pending Complaints",
      value: 10,
      growth: "-2",
    },
    {
      iconBg: "bg-green-600",
      icon: <FaClipboardQuestion className="text-2xl text-white" />,
      label: "Unresolved Complaints",
      value: 5,
      growth: "+1",
    },
    {
        iconBg: "bg-violet-600",
        icon: <IoTimerSharp className="text-2xl text-white" />,
        label: "System Complaints",
        value: 10,
        growth: "+1",
      },
  ];
  const LineData = [
    { day: "Monday", parcel: 123, document: 180, express: 90, letter: 80 },
    { day: "Tuesday", parcel: 20, document: 90, express: 120, letter: 60 },
    { day: "Wednesday", parcel: 110, document: 100, express: 130, letter: 70 },
    { day: "Thursday", parcel: 50, document: 120, express: 140, letter: 80 },
    { day: "Friday", parcel: 30, document: 15, express: 16, letter: 10 },
    { day: "Saturday", parcel: 350, document: 180, express: 180, letter: 120 },
    { day: "Sunday", parcel: 40, document: 20, express: 200, letter: 150 },
  ];

  const chartData = [
    { date: "2024-07-15", check: 450 },
    { date: "2024-07-16", check: 380 },
    { date: "2024-07-17", check: 520 },
    { date: "2024-07-18", check: 140 },
    { date: "2024-07-19", check: 600 },
    { date: "2024-07-20", check: 480 },
  ];

  const serviceData = [
    {
      name: "Economy",
      value: 20,
      fill: "#fbe1e1",
    },
    {
      name: "Priority",
      value: 12,
      fill: "#F7C2C1",
    },
    {
      name: "Regular",
      value: 16,
      fill: "#ff7976",
    },
    {
      name: "Express",
      value: 10,
      fill: "#ff5754",
    },
  ];

  const containerData = [
    {
      containerId: "C123456",
      totalConsignments: 120,
      checkInDate: "2024-11-25",
      location: "NSH Delhi",
      notes:
        "This container is scheduled for transfer to Mumbai by 2024-11-27.",
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
    <div className="min-h-screen overflow-y-auto max-h-screen bg-gray-100 p-6 md:p-8">
      {/* Dashboard Section */}
      <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-[4fr,6fr] gap-4 ">
        <div className="grid grid-cols-1   md:grid-rows-5 gap-4 w-full">
          {items.map((state, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200 ease-in-out flex items-center justify-around space-x-3"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${state.iconBg} text-white`}
              >
                {state.icon}
              </div>
              <div className="flex flex-col justify-between space-y-1">
                <p className="text-xs font-medium text-gray-600">
                  {state.label}
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {state.value}
                </p>
                <p
                  className={`text-xs font-medium ${
                    state.growth.includes("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {state.growth}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-row-2 gap-6">
        <div className="bg-white  rounded-lg shadow">
          <ComplaintLinechart chartData={LineData} />
        </div>
        <div className="bg-white rounded-lg shadow">
          <ComplaintPiechart chartData={serviceData} />

          </div>
        </div>
        
      </div>

      

      {/* Search Section */}
      <div className="mt-8 flex justify-center">
        <div className="flex w-full  items-center gap-4">
          <input
            type="text"
            placeholder="Check-In by Container ID"
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
            <ContainerDetails
              key={container.containerId}
              container={container}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <FaBox className="text-gray-400 text-4xl mb-4" />
            <p className="text-lg font-medium text-gray-600">
              No Data Available
            </p>
            <p className="text-sm text-gray-500">
              No containers to display at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

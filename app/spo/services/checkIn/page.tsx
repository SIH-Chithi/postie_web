"use client";

import React, { useState } from "react";
import ContainerDetails from "@/components/Container";
import { FaBox } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { Linechart } from "@/components/LineChart";
import { CheckBar } from "@/components/CheckBar";
import { CheckRadial, Example, ServiceChart } from "@/components/Checkradial";
import { FaArchive } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { DropdownMenuCheckboxes } from "@/components/DashBoardDropDown";
import { Modal } from "@/components/Modal";
import TableComponent1 from "@/components/ui/tableComponent";

const Page = () => {
  const [itemTypeDataType, setItemTypeDataType] = useState<
    "Monthly" | "Weekly" | "Yearly"
  >("Monthly");

  // Line Graph Data
  const LineData = {
    Weekly: [
      { day: "Monday", parcel: 186, document: 80, express: 100, letter: 50 },
      { day: "Tuesday", parcel: 200, document: 90, express: 120, letter: 60 },
      {
        day: "Wednesday",
        parcel: 150,
        document: 100,
        express: 130,
        letter: 70,
      },
      { day: "Thursday", parcel: 250, document: 120, express: 140, letter: 80 },
      { day: "Friday", parcel: 300, document: 150, express: 160, letter: 100 },
      {
        day: "Saturday",
        parcel: 350,
        document: 180,
        express: 180,
        letter: 120,
      },
      { day: "Sunday", parcel: 400, document: 200, express: 200, letter: 150 },
    ],
    Monthly: [
      {
        day: "January",
        parcel: 1000,
        document: 500,
        express: 250,
        letter: 150,
      },
      {
        day: "February",
        parcel: 1200,
        document: 600,
        express: 300,
        letter: 200,
      },
      { day: "March", parcel: 1300, document: 700, express: 350, letter: 250 },
      { day: "April", parcel: 1100, document: 600, express: 300, letter: 200 },
      { day: "May", parcel: 1150, document: 550, express: 270, letter: 180 },
      { day: "June", parcel: 1250, document: 650, express: 325, letter: 225 },
      { day: "July", parcel: 1350, document: 750, express: 375, letter: 275 },
      { day: "August", parcel: 1150, document: 650, express: 325, letter: 225 },
      {
        day: "September",
        parcel: 1200,
        document: 600,
        express: 300,
        letter: 200,
      },
      {
        day: "October",
        parcel: 1300,
        document: 700,
        express: 350,
        letter: 250,
      },
      {
        day: "November",
        parcel: 1100,
        document: 600,
        express: 300,
        letter: 200,
      },
      {
        day: "December",
        parcel: 1150,
        document: 550,
        express: 270,
        letter: 180,
      },
    ],
    Yearly: [
      {
        day: "2021",
        parcel: 10000,
        document: 5000,
        express: 2500,
        letter: 1500,
      },
      {
        day: "2022",
        parcel: 12000,
        document: 6000,
        express: 3000,
        letter: 2000,
      },
      {
        day: "2023",
        parcel: 13000,
        document: 7000,
        express: 3500,
        letter: 2500,
      },
      {
        day: "2024",
        parcel: 11000,
        document: 6000,
        express: 3000,
        letter: 2000,
      },
    ],
  };

  // Pie Chart Data
  const serviceUsageData =  [
      { name: "January", value: 100, fill: "#fbe1e1" },
      { name: "February", value: 120, fill: "#F7C2C1" },
      { name: "March", value: 130, fill: "#ff7976" },
      { name: "April", value: 110, fill: "#ff5754" },
      { name: "May", value: 115, fill: "#fbe1e1" },
      { name: "June", value: 125, fill: "#F7C2C1" },
      { name: "July", value: 135, fill: "#ff7976" },
      { name: "August", value: 115, fill: "#ff5754" },
      { name: "September", value: 120, fill: "#fbe1e1" },
      { name: "October", value: 130, fill: "#F7C2C1" },
      { name: "November", value: 110, fill: "#ff7976" },
      { name: "December", value: 115, fill: "#ff5754" },
   
  ];

  // Bar Graph Data
  const chartData = {
    Weekly: [
      { date: "2024-07-15", check: 450 },
      { date: "2024-07-16", check: 380 },
      { date: "2024-07-17", check: 520 },
      { date: "2024-07-18", check: 140 },
      { date: "2024-07-19", check: 600 },
      { date: "2024-07-20", check: 480 },
    ],
    Monthly: [
      { date: "2024-07-01", check: 250 },
      { date: "2024-07-02", check: 300 },
      { date: "2024-07-03", check: 500 },
      { date: "2024-07-04", check: 200 },
      { date: "2024-07-05", check: 600 },
      { date: "2024-07-06", check: 410 },
    ],
    Yearly: [
      { date: "2021", check: 1000 },
      { date: "2022", check: 1200 },
      { date: "2023", check: 1300 },
      { date: "2024", check: 1100 },
    ],
  };

  const [itemTypeGraphData, setItemTypeGraphData] = useState(LineData.Monthly);
  const [pieData, setPieData] = useState(serviceUsageData.Monthly);
  const [barData, setBarData] = useState(chartData.Monthly);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTableData, setModalTableData] = useState([]);

  const handleFilterChange = (
    filter: "Monthly" | "Weekly" | "Yearly",
    chartType: string
  ) => {
    // Setting data based on chart type
    if (chartType === "PieChart") {
      setPieData(serviceUsageData[filter]);
    } else if (chartType === "BarChart") {
      setBarData(chartData[filter]);
    } else if (chartType === "LineChart") {
      setItemTypeGraphData(LineData[filter]);
    }
    setItemTypeDataType(filter);
  };

  const openModalWithTableData = (data: any) => {
    setModalTableData(data);
    setIsModalOpen(true);
  };

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
      <div className="grid  lg:grid-cols-[4fr,6fr] gap-6">
        {/* Cards Section */}
        <div className="grid grid-rows-2 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all flex items-center">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-red-400 text-white">
                <FaBox className="text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Today's Check-In</p>
                <p className="text-2xl font-bold text-red-400">+500</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all flex items-center">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-orange-500 text-white">
                <FaBoxOpen className="text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Old Check-In</p>
                <p className="text-2xl font-bold text-orange-500">+1000</p>
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
                <p className="text-2xl font-bold text-yellow-500">+1500</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all flex items-center">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-red-700 text-white">
                <FaBoxesPacking className="text-2xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Weekly</p>
                <p className="text-2xl font-bold text-red-700">+200</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Data Distribution</h2>
            <DropdownMenuCheckboxes
              handleFilter={(filter) => handleFilterChange(filter, "PieChart")}
              handleTable={() => openModalWithTableData(barData)}
            />
          </div>
          <CheckBar
            data={barData}
            dataType={
              itemTypeDataType.toLowerCase() as "monthly" | "weekly" | "yearly"
            }
            heading="Check In"
          />
        </div>
        {/* Table Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Data Table"
        >
          <TableComponent1 data={modalTableData} />
        </Modal>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[5fr,5fr]">
        {/* Line Chart Section */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Parcel Type Dashboard</h2>
            <DropdownMenuCheckboxes
              handleFilter={(filter) =>
                handleFilterChange(filter, "ServiceUsage")
              }
              handleTable={() => openModalWithTableData(itemTypeGraphData)}
            />
          </div>
          <Linechart chartData={itemTypeGraphData} />
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Data Table"
        >
          <TableComponent1 data={modalTableData} />
        </Modal>
        {/* Line Chart Section */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Service Usage Dashboard</h2>
            <DropdownMenuCheckboxes
              handleFilter={(filter) =>
                handleFilterChange(filter, "ServiceUsage")
              }
              handleTable={() => openModalWithTableData(pieData)}
            />
          </div>
          <Example/>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Data Table"
        >
          <TableComponent1 data={modalTableData} />
        </Modal>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[5fr,5fr]">
        
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

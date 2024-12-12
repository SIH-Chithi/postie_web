"use client";

import { Component } from "@/components/BarGraph";
import { Linechart } from "@/components/LineChart";
import { Piechart } from "@/components/PieChart";
import DashBoard_Status_Number from "@/components/reusable/DashBoard_Status_Number";
import TableComponent1 from "@/components/ui/tableComponent";
import React, { useState } from "react";
import { IoBagHandle } from "react-icons/io5";
import { ItemTypeDashBoard } from "@/components/ItemTypeDashBoard";
import { ComplaintTable } from "@/components/ComplaintTable";
import Statetopdashboard from "@/components/State-top-dashboard";
import { Complaints } from "@/components/ComplaintsBar";
import { Modal } from "@/components/Modal";
import { DropdownMenuCheckboxes } from "@/components/DashBoardDropDown";
import {TableComponent} from "@/components/Table";
function page() {

  const [itemTypeDataType, setItemTypeDataType] = useState<"Monthly" | "Weekly" | "Yearly">("Monthly");

  const sateNumberItems = [
    {
      iconBg: "bg-red-400",
      icon: <IoBagHandle className="text-2xl text-white" />,
      label: "Total Parcels",
      value: 150,
      growth: "+234",
    },
    {
      iconBg: "bg-yellow-500",
      icon: <IoBagHandle className="text-2xl text-white" />,
      label: "Delivered Parcels",
      value: 120,
      growth: "+150",
    },
    {
      iconBg: "bg-red-800",
      icon: <IoBagHandle className="text-2xl text-white" />,
      label: "Pending Parcels",
      value: 30,
      growth: "-10",
    },
    {
      iconBg: "bg-yellow-700",
      icon: <IoBagHandle className="text-2xl text-white" />,
      label: "Returned Parcels",
      value: 20,
      growth: "+5",
    },
  ];

  const data = [
    { day: "Monday", number_cons: 500 },
    { day: "Tuesday", number_cons: 400 },
    { day: "Wednesday", number_cons: 300 },
    { day: "Thursday", number_cons: 450 },
    { day: "Friday", number_cons: 600 },
    { day: "Saturday", number_cons: 700 },
    { day: "Sunday", number_cons: 650 },
  ];
  // PieChart Data
  // PieChart Data
  const pieChartData = {
    Monthly: [
      { name: "Documents", value: 120, fill: "#f35757" },
      { name: "Parcels", value: 80, fill: "#ca1407" },
      { name: "Express Parcels", value: 60, fill: "#FFC107" },
      { name: "Letters", value: 40, fill: "#b2170d" },
    ],
    Weekly: [
      { name: "Documents", value: 30, fill: "#f35757" },
      { name: "Parcels", value: 20, fill: "#ca1407" },
      { name: "Express Parcels", value: 15, fill: "#FFC107" },
      { name: "Letters", value: 10, fill: "#b2170d" },
    ],
    Yearly: [
      { name: "Documents", value: 400, fill: "#f35757" },
      { name: "Parcels", value: 300, fill: "#ca1407" },
      { name: "Express Parcels", value: 200, fill: "#FFC107" },
      { name: "Letters", value: 150, fill: "#b2170d" },
    ],
  };

  // ItemTypeDashboard Data
  const itemTypeData = {
    Monthly: [
      {
        date: "2024-01",
        speedpost: 450,
        expressparcel: 300,
        mediapost: 200,
        logisticpost: 100,
      },
      {
        date: "2024-02",
        speedpost: 300,
        expressparcel: 200,
        mediapost: 100,
        logisticpost: 50,
      },
      {
        date: "2024-03",
        speedpost: 200,
        expressparcel: 150,
        mediapost: 100,
        logisticpost: 50,
      },
      {
        date: "2024-04",
        speedpost: 400,
        expressparcel: 250,
        mediapost: 150,
        logisticpost: 50,
      },
      {
        date: "2024-05",
        speedpost: 200,
        expressparcel: 150,
        mediapost: 100,
        logisticpost: 50,
      },
      {
        date: "2024-06",
        speedpost: 300,
        expressparcel: 200,
        mediapost: 100,
        logisticpost: 50,
      },
      {
        date: "2024-07",
        speedpost: 500,
        expressparcel: 350,
        mediapost: 200,
        logisticpost: 150,
      },
      {
        date: "2024-08",
        speedpost: 400,
        expressparcel: 250,
        mediapost: 150,
        logisticpost: 100,
      },
      {
        date: "2024-09",
        speedpost: 300,
        expressparcel: 200,
        mediapost: 100,
        logisticpost: 50,
      },
      {
        date: "2024-10",
        speedpost: 600,
        expressparcel: 450,
        mediapost: 300,
        logisticpost: 200,
      },
      {
        date: "2024-11",
        speedpost: 700,
        expressparcel: 500,
        mediapost: 400,
        logisticpost: 250,
      },
      {
        date: "2024-12",
        speedpost: 800,
        expressparcel: 600,
        mediapost: 500,
        logisticpost: 300,
      },
    ],
    Weekly: [
      {
        date: "2024-11-01",
        speedpost: 100,
        expressparcel: 50,
        mediapost: 30,
        logisticpost: 20,
      },
      {
        date: "2024-11-02",
        speedpost: 120,
        expressparcel: 60,
        mediapost: 40,
        logisticpost: 30,
      },
      {
        date: "2024-11-03",
        speedpost: 130,
        expressparcel: 70,
        mediapost: 50,
        logisticpost: 40,
      },
      {
        date: "2024-11-04",
        speedpost: 110,
        expressparcel: 60,
        mediapost: 40,
        logisticpost: 30,
      },
      {
        date: "2024-11-05",
        speedpost: 115,
        expressparcel: 55,
        mediapost: 35,
        logisticpost: 25,
      },
      {
        date: "2024-11-06",
        speedpost: 120,
        expressparcel: 60,
        mediapost: 40,
        logisticpost: 30,
      },
      {
        date: "2024-11-07",
        speedpost: 125,
        expressparcel: 65,
        mediapost: 45,
        logisticpost: 35,
      },
    ],
    Yearly: [
      {
        date : "2024",
        speedpost: 1000,
        expressparcel: 500,
        mediapost: 300,
        logisticpost: 200,
      },{

        date : "2023",
        speedpost: 1200,
        expressparcel: 600,
        mediapost: 400,
        logisticpost: 250,
      },{
        date : "2022",
        speedpost: 1300,
        expressparcel: 700,
        mediapost: 450,
        logisticpost: 300,
      },{
        date : "2021",
        speedpost: 1100,
        expressparcel: 600,
        mediapost: 400,
        logisticpost: 250,
      },{
        date : "2020",
        speedpost: 1150,
        expressparcel: 550,
        mediapost: 350,
        logisticpost: 225,
      }
    ],
  };

  const serviceUsageData = {
    Monthly: [
      { day: "Monday", parcel: 20, document: 10, express: 5, letter: 3 },
      { day: "Tuesday", parcel: 25, document: 15, express: 8, letter: 4 },
      { day: "Wednesday", parcel: 30, document: 20, express: 10, letter: 5 },
      { day: "Thursday", parcel: 22, document: 18, express: 6, letter: 3 },
      { day: "Friday", parcel: 27, document: 13, express: 7, letter: 4 },
    ],
    Weekly: [
      { day: "Monday", parcel: 10, document: 5, express: 2, letter: 1 },
      { day: "Tuesday", parcel: 12, document: 6, express: 3, letter: 2 },
      { day: "Wednesday", parcel: 15, document: 8, express: 4, letter: 3 },
      { day: "Thursday", parcel: 11, document: 7, express: 3, letter: 2 },
      { day: "Friday", parcel: 14, document: 5, express: 3, letter: 2 },
    ],
    Yearly: [
      { day: "Monday", parcel: 100, document: 50, express: 25, letter: 15 },
      { day: "Tuesday", parcel: 120, document: 60, express: 30, letter: 20 },
      { day: "Wednesday", parcel: 130, document: 70, express: 35, letter: 25 },
      { day: "Thursday", parcel: 110, document: 60, express: 30, letter: 20 },
      { day: "Friday", parcel: 115, document: 55, express: 27, letter: 18 },
    ],
  };

  const [pieData, setPieData] = useState(pieChartData.Monthly); 
  const [itemTypeGraphData, setItemTypeGraphData] = useState(itemTypeData.Monthly); 
  const [serviceUsageGraphData, setServiceUsageGraphData] = useState(serviceUsageData.Monthly); 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTableData, setModalTableData] = useState([]);

  const handleFilterChange = (
    filter: "Monthly" | "Weekly" | "Yearly",
    chartType: string
  ) => {
    // Setting data based on chart type
    if (chartType === "PieChart") {
      setPieData(pieChartData[filter]);
    } else if (chartType === "ItemType") {
      setItemTypeGraphData(itemTypeData[filter]);
    } else if (chartType === "ServiceUsage") {
      setServiceUsageGraphData(serviceUsageData[filter]);
    }
    
   
    setItemTypeDataType(filter); 
  };
  

  const openModalWithTableData = (data: any) => {
    setModalTableData(data);
    setIsModalOpen(true);
  };

  const lineData = [
    { day: "Monday", parcel: 186, Document: 80 },
    { day: "Tuesday", parcel: 305, Document: 200 },
    { day: "Wednesday", parcel: 237, Document: 120 },
    { day: "Thursday", parcel: 73, Document: 190 },
    { day: "Friday", parcel: 209, Document: 130 },
    { day: "Sunday", parcel: 214, Document: 140 },
  ];

  const tableData = [
    {
      orderId: "ODI1234",
      status: "PAID",
      method: "UPI",
      amount: 1500,
    },
    {
      orderId: "ODI1235",
      status: "UNPAID",
      method: "CASH",
      amount: 1000,
    },
    {
      orderId: "ODI1236",
      status: "UNPAID",
      method: "CASH",
      amount: 2200,
    },
    {
      orderId: "ODI1237",
      status: "PAID",
      method: "CARD",
      amount: 900,
    },
    {
      orderId: "ODI1238",
      status: "UNPAID",
      method: "CASH",
      amount: 1200,
    },
    {
      orderId: "ODI1239",
      status: "UNPAID",
      method: "CASH",
      amount: 1900,
    },
  ];

  const complaints = [
    {
      id: 1,
      complain_id: "C001",
      orderId: "ODI1234",
      message: "Delayed delivery",
      status: "Pending",
      created_on: "2023-01-01",
    },
    {
      id: 2,
      complain_id: "C002",
      orderId: "ODI1235",
      message: "Damaged parcel",
      status: "Resolved",
      created_on: "2023-01-02",
    },
    {
      id: 3,
      complain_id: "C003",
      orderId: "ODI1236",
      message: "Lost parcel",
      status: "In Progress",
      created_on: "2023-01-03",
    },
  ];
  const stateData = [
    { state: "Maharashtra", checkIn: 186, checkOut: 80 },
    { state: "Uttar Pradesh", checkIn: 305, checkOut: 200 },
    { state: "Karnataka", checkIn: 237, checkOut: 120 },
    { state: "West Bengal", checkIn: 73, checkOut: 190 },
    { state: "Gujarat", checkIn: 209, checkOut: 130 },
    { state: "Madhya Pradesh", checkIn: 214, checkOut: 140 },
  ];

  const district = [
    { state: "Mylapore", checkIn: 186, checkOut: 80 },
    { state: "Kotturpuram", checkIn: 305, checkOut: 200 },
    { state: "Adyar", checkIn: 237, checkOut: 120 },
    { state: "Teynampet", checkIn: 73, checkOut: 190 },
    { state: "Nungambakkam", checkIn: 209, checkOut: 130 },
    { state: "Anna Nagar", checkIn: 214, checkOut: 140 },
  ];

  const complaint = [
    {
      name: "Complaints Resolved",
      value: 10,
      fill: "#f35757",
    },
    {
      name: "Complaints Pending",
      value: 20,
      fill: "#eeeeee",
    },
  ];
  const serverComplaint = [
    {
      name: "Complaints Resolved",
      value: 70,
      fill: "#f35757",
    },
    {
      name: "Complaints Pending",
      value: 20,
      fill: "#eeeeee",
    },
  ];

  return (
    //make it scrollable
    <div className="flex min-h-screen bg-screenBackgroundColor overflow-y-auto max-h-screen">
      <div className="flex-1 overflow-auto max-w-full p-4">
        <div className="flex flex-wrap justify-center gap-4">
          <DashBoard_Status_Number items={sateNumberItems} />
        </div>

        <div className="flex-1 overflow-auto max-w-full p-4">
          <div className="grid gap-6 lg:grid-cols-[3fr,7fr]">
            {/* Pie Chart Section */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Data Distribution</h2>
                <DropdownMenuCheckboxes
                  handleFilter={(filter) =>
                    handleFilterChange(filter, "PieChart")
                  }
                  handleTable={() => openModalWithTableData(pieData)}
                />
              </div>
              <Piechart chartData={pieData} />
            </div>

            {/* ItemTypeDashboard Section */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Item Type Overview</h2>
                <DropdownMenuCheckboxes
                  handleFilter={(filter) =>
                    handleFilterChange(filter, "ItemType")
                  }
                  handleTable={() => openModalWithTableData(itemTypeGraphData)}
                />
              </div>
              <ItemTypeDashBoard 
                  chartData={itemTypeGraphData}
                  dataType= {itemTypeDataType.toLowerCase() as "monthly" | "weekly" | "yearly"}
              />
            </div>

            
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

        <div className="mt-6 grid gap-6 lg:grid-cols-[6fr,4fr]">
          <div className="mt-6 bg-white py-4 rounded-lg shadow">
            <div className="flex justify-between items-center px-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Recent Parcels
              </h2>
            </div>
            <div className="mt-4">
              <TableComponent parcels={tableData} />
            </div>
          </div>

          <div className=" mt-6 bg-white pt-4  rounded-lg shadow-sm">
            <div className="flex justify-between items-center px-4">
              <h2 className="text-lg  font-semibold text-gray-800">
                Recent Complaints
              </h2>
            </div>
            <div className="">
              {/* <ComplaintTable complaints={complaints} /> */}
              <div className="bg-white p-4 rounded-lg shadow">
                <ComplaintTable complaints={complaints} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[6fr,4fr]">
          {/* top states and district */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Top States
                </h2>
              </div>
              <div className="mt-4">
                <Statetopdashboard state={stateData} />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Top District
                </h2>
              </div>
              <div className="mt-4">
                <Statetopdashboard state={district} />
              </div>
            </div>
          </div>

          {/* Complaints and server complaints */}
          <div className=" flex flex-col gap-4">
            <div className="bg-white p-1 rounded-lg shadow flex flex-col">
              <h1 className="text-lg font-semibold text-center pt-2 text-gray-800">
                Customer Complaints
              </h1>
              <Complaints chartData={complaint} />
            </div>

            <div className="bg-white p-1 shadow rounded-lg pt-2 flex flex-col">
              <h1 className="text-lg font-semibold text-center text-gray-800">
                Delay Complaints
              </h1>
              <Complaints chartData={serverComplaint} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

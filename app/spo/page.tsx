import { Component } from "@/components/BarGraph";
import { Linechart } from "@/components/LineChart";
import { Piechart } from "@/components/PieChart";
import DashBoard_Status_Number from "@/components/reusable/DashBoard_Status_Number";
import { TableComponent } from "@/components/Table";
import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { ItemTypeDashBoard } from "@/components/ItemTypeDashBoard";
import { ComplaintTable } from "@/components/ComplaintTable";
import Statetopdashboard from "@/components/state-top-dashboard";
import { Complaints } from "@/components/ComplaintsBar";

function page() {
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
  const chartData = [
    { name: "Documents", value: 400, fill: "#f35757" },
    { name: "Parcels", value: 300, fill: "#ca1407" },
    { name: "Express Parcels", value: 300, fill: "#FFC107" },
    { name: "Letters", value: 200, fill: "#b2170d" },
  ];
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
      name:"Complaints Resolved",
      value: 10,
      fill : "#f35757"
    },{
      name:"Complaints Pending",
      value: 20,
      fill : "#eeeeee"
    }

  ]
  const serverComplaint = [
    {
      name:"Complaints Resolved",
      value: 70,
      fill : "#f35757"
    },{
      name:"Complaints Pending",
      value: 20,
      fill : "#eeeeee"
    }

  ]


  return (
    //make it scrollable
    <div className="flex min-h-screen bg-screenBackgroundColor overflow-y-auto max-h-screen">
      <div className="flex-1 overflow-auto max-w-full p-4">
        <div className="flex flex-wrap justify-center gap-4">
          <DashBoard_Status_Number items={sateNumberItems} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[3fr,7fr]">
          {/* <div className="bg-white p-4 rounded-lg shadow-sm flex justify-center items-center">
            <Component chartData={data} />
          </div> */}

          <div className="bg-white  rounded-lg shadow flex justify-center items-center">
            <Piechart chartData={chartData} />
          </div>

          {/* <div className="bg-white p-4 rounded-lg shadow-sm flex justify-center items-center">
            <Linechart chartData={lineData} />
          </div> */}

          <div className="bg-white p-4 rounded-lg shadow flex justify-center items-center">
            <ItemTypeDashBoard />
          </div>
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
              <h1 className="text-lg font-semibold text-center pt-2 text-gray-800">Customer Complaints</h1>
              <Complaints chartData={complaint} />
              </div>

              <div className="bg-white p-1 shadow rounded-lg pt-2 flex flex-col">
                <h1 className="text-lg font-semibold text-center text-gray-800">Delay Complaints</h1>
                <Complaints chartData={serverComplaint} />
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default page;

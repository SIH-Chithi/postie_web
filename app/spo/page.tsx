import { Component } from "@/components/BarGraph";
import { Linechart } from "@/components/LineChart";
import { Piechart } from "@/components/PieChart";
import DashBoard_Status_Number from "@/components/reusable/DashBoard_Status_Number";
import { TableComponent } from "@/components/Table";
import React from "react";
import { IoBagHandle } from "react-icons/io5";

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
    }
    ];

  return (
    <div className="flex min-h-screen bg-screenBackgroundColor">
      <div className="flex-1 overflow-auto max-w-full p-4">
        <div className="flex flex-wrap justify-center gap-4">
          <DashBoard_Status_Number items={sateNumberItems} />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-4 rounded-lg shadow-sm flex justify-center items-center">
            <Component chartData={data} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm flex justify-center items-center">
            <Piechart chartData={chartData} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm flex justify-center items-center">
            <Linechart chartData={lineData} />
          </div>
        </div>

        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
            <TableComponent
                parcels={tableData}
                
            />
        </div>
      </div>
    </div>
  );
}

export default page;

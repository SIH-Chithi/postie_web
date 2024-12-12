"use client";

import React, { useEffect, useState } from "react";
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
import { DropdownMenuCheckboxes } from "@/components/DashBoardDropDown";
import TableComponent1 from "@/components/ui/tableComponent";
import { Modal } from "@/components/Modal";
import { ComplaintTable } from "@/components/ComplaintTable";
import axios from "axios";
import { ServerComplaintTable } from "@/components/ServerComplaintsTable";

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

  //   linear chart data
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

  type FilterOption = "Weekly" | "Monthly" | "Yearly";

  const [itemTypeGraphData, setItemTypeGraphData] = useState(LineData.Monthly);

  const handleFilter = (filter: FilterOption) => {
    setItemTypeGraphData(LineData[filter]);
  };
  const chartData = [
    { date: "2024-07-15", check: 450 },
    { date: "2024-07-16", check: 380 },
    { date: "2024-07-17", check: 520 },
    { date: "2024-07-18", check: 140 },
    { date: "2024-07-19", check: 600 },
    { date: "2024-07-20", check: 480 },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTableData, setModalTableData] = useState([]);
  const openModalWithTableData = (data: any) => {
    setModalTableData(data);
    setIsModalOpen(true);
  };

  const tableData = [
    {
      complain_id: "CID2326357",
      orderId: "OID2326357",
      status: "Resolved",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-15",
    },
    {
      complain_id: "CID2326358",
      orderId: "OID2326358",
      status: "Pending",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-16",
    },
    {
      complain_id: "CID2326359",
      orderId: "OID2326359",
      status: "Resolved",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-17",
    },
    {
      complain_id: "CID2326360",
      orderId: "OID2326360",
      status: "Pending",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-18",
    },
    {
      complain_id: "CID2326361",
      orderId: "OID2326361",
      status: "Resolved",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-19",
    },
    {
      complain_id: "CID2326362",
      orderId: "OID2326362",
      status: "Pending",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-20",
    },
  ];

  const serverComplaint = [
    {
      complain_id: "CID2326357",
      orderId: "OID2326357",
      status: "Resolved",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-15",
    },
    {
      complain_id: "CID2326358",
      orderId: "OID2326358",
      status: "Pending",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-16",
    },
    {
      complain_id: "CID2326359",
      orderId: "OID2326359",
      status: "Resolved",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-17",
    },
    {
      complain_id: "CID2326360",
      orderId: "OID2326360",
      status: "Pending",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-18",
    },
    {
      complain_id: "CID2326361",
      orderId: "OID2326361",
      status: "Resolved",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-19",
    },
    {
      complain_id: "CID2326362",
      orderId: "OID2326362",
      status: "Pending",
      message: "The parcel was delivered to the wrong address.",
      created_on: "2024-07-20",
    },
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
  const [serverData, setServerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset error state

      try {
        const response = await axios.get(
          "https://post.rootski.live/employee/get_system_complains/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        if (response.status === 200) {
          console.log("Data fetched successfully");
          setServerData(response.data);
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [message, setMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  type Complaint = {
    complain_id: string;
    orderId: string;
    status: string;
    message: string;
    created_on: string;
  };

  const handleDetails = (data: Complaint) => {
    setSelectedComplaint(data);
  };

  console.log(selectedComplaint);
  const handleSubmit = async () => {
    if (!selectedComplaint) return;

    try {
      const response = await axios.post(
        "https://post.rootski.live/employee/give_message/",
        
        {
            complain_id: Number(selectedComplaint),
          message : message,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Message submitted successfully");
        setShowThankYou(true);
        setTimeout(() => {
          setShowThankYou(false);
          setSelectedComplaint(null);
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      {serverData.length === 0 ? (
        <div>No data available.</div>
      ) : (
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
              <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">
                    Complaint Trends Type
                  </h2>
                  <DropdownMenuCheckboxes
                    handleFilter={(filter) => handleFilter(filter)}
                    handleTable={() =>
                      openModalWithTableData(itemTypeGraphData)
                    }
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
              <div className="bg-white rounded-lg shadow">
                <ComplaintPiechart chartData={serviceData} />
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[5fr,5fr]">
            <div className="mt-6 bg-white py-4 rounded-lg shadow">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  User Complaints
                </h2>
              </div>
              <div className="mt-4">
                <ComplaintTable complaints={tableData} />
              </div>
            </div>
            <div className="mt-6 bg-white py-4 rounded-lg shadow">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  System Complaints
                </h2>
              </div>
              <div className="mt-4">
                <ServerComplaintTable
                  complaints={serverData}
                  onComplaintClick={handleDetails}
                />
              </div>
            </div>
          </div>

            {/* Modal for Complaint Details */}
      {selectedComplaint && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-lg font-bold mb-4">Complaint Details</h2>
            <p className="mb-4">
              Complaint ID: <strong>{selectedComplaint}</strong>
            </p>
            <textarea
              className="w-full p-2 border rounded mb-4"
              rows={4}
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                onClick={() => setSelectedComplaint(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Pop-Up */}
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg text-center">
            <h2 className="text-lg font-bold mb-2">Thank You!</h2>
            <p>Your message has been successfully submitted.</p>
          </div>
        </div>
      )}
        </div>
        
      )}
    </div>
  );
};

export default Page;

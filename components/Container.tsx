// ContainerDetails.tsx
import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

interface ContainerProps {
  container: {
    containerId: string;
    totalConsignments: number;
    checkInDate: string;
    location: string;
    notes: string;
  };
}

const ContainerDetails: React.FC<ContainerProps> = ({ container }) => {
  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between">
        {/* Container Info */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Container ID: <span className="text-red-600">{container.containerId}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Total Consignments */}
            <div>
              <span className="block text-sm font-medium text-gray-500">Total Consignments</span>
              <span className="text-gray-900">{container.totalConsignments}</span>
            </div>
            {/* Check-in Date */}
            <div>
              <span className="block text-sm font-medium text-gray-500">Check-in Date</span>
              <span className="text-gray-900">
                {new Date(container.checkInDate).toLocaleDateString()}
              </span>
            </div>
            {/* Location */}
            <div>
              <span className="block text-sm font-medium text-gray-500">Location</span>
              <span className="text-gray-900">{container.location}</span>
            </div>
            {/* Notes */}
            <div>
              <span className="block text-sm font-medium text-gray-500">Notes</span>
              <span className="text-gray-700 italic">{container.notes}</span>
            </div>
          </div>
        </div>
        {/* Check Icon */}
        <div className="flex items-center justify-center">
          <IoCheckmarkDoneSharp className="text-green-500 w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default ContainerDetails;

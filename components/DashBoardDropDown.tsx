"use client";

import * as React from "react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type FilterOption = "Monthly" | "Weekly" | "Yearly";

interface ITable {
  handleTable: () => void;
  handlePrint: () => void;
  handleFilter: (filter: FilterOption) => void;
}

export function DropdownMenuCheckboxes({
  handleTable,
  handlePrint,
  handleFilter,
}: ITable) {
  const [selectedFilter, setSelectedFilter] = React.useState<FilterOption | null>(null);

  const handleFilterClick = (filter: FilterOption) => {
    setSelectedFilter(filter); 
    handleFilter(filter); 
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out">
          More
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 shadow-lg rounded-lg bg-white ring-1 ring-gray-200 transition-transform duration-200 ease-in-out transform hover:scale-105">
        <DropdownMenuLabel className="text-lg font-semibold text-gray-800 py-2">More Details</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200 ease-in-out"
          onSelect={handleTable}
        >
          Show Table
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200 ease-in-out"
          onSelect={handlePrint}
        >
          Print Data
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel className="text-lg font-semibold text-gray-800 py-2">Filter Data</DropdownMenuLabel>

        <DropdownMenuItem 
          onSelect={() => handleFilterClick("Monthly")}
          className={`px-4 py-2 text-gray-600 rounded-lg transition duration-200 ease-in-out ${selectedFilter === "Monthly" ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
        >
          Monthly
        </DropdownMenuItem>
        <DropdownMenuItem 
          onSelect={() => handleFilterClick("Weekly")}
          className={`px-4 py-2 text-gray-600 rounded-lg transition duration-200 ease-in-out ${selectedFilter === "Weekly" ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
        >
          Weekly
        </DropdownMenuItem>
        <DropdownMenuItem 
          onSelect={() => handleFilterClick("Yearly")}
          className={`px-4 py-2 text-gray-600 rounded-lg transition duration-200 ease-in-out ${selectedFilter === "Yearly" ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
        >
          Yearly
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

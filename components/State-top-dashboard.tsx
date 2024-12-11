import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  type stateTop = {
    state : string;
    checkIn: number;
    checkOut: number;
    
  };
  
  interface ITable {
    state?: stateTop[];
  }
function Statetopdashboard({ state = [] }: ITable) {
  return (
   

       
          <Table>
         
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead className="w-[100px]">State</TableHead>
                <TableHead>CheckIn</TableHead>
                <TableHead>Checkout</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {state.length > 0 ? (
                state.map((parcel, index) => (
                  <TableRow key={index}>
                    <TableCell>{parcel.state}</TableCell>
                    <TableCell>{parcel.checkIn}</TableCell>
                    <TableCell>{parcel.checkOut}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
  );
}

export default Statetopdashboard
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  type Parcel = {
    orderId: string;
    status: string;
    method: string;
    amount: number;
  };
  
  interface ITable {
    parcels?: Parcel[]; 
  }
  
  export function TableComponent({ parcels = [] }: ITable) {
    return (
      <Table>
        <TableCaption>A list of your recent Parcels</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">OrderID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcels.length > 0 ? (
            parcels.map((parcel, index) => (
              <TableRow key={index}>
                <TableCell>{parcel.orderId}</TableCell>
                <TableCell>{parcel.status}</TableCell>
                <TableCell>{parcel.method}</TableCell>
                <TableCell className="text-right">{parcel.amount}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No parcels available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
  
"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { MdDashboard } from "react-icons/md";
import { MdLocalPrintshop } from "react-icons/md";
import { BiSolidPackage } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";

import { MdQrCodeScanner } from "react-icons/md";



import { FcInspection } from "react-icons/fc";



export default function Layout({ children }: { children: React.ReactNode }) {
    const handleLogout = () => {
        console.log("Logout clicked");
        // Implement your logout logic here
      };
    const items = [
       { title: "Dashboard", url: "/", icon: MdDashboard },
       { title: "Check In", url: "/app/spo/services/check-in", icon: FcInspection },
         { title: "Check Out", url: "/app/spo/services/check-out", icon: MdQrCodeScanner },
         { title: "Complains", url: "/app/spo/services/complaints", icon: RiCustomerService2Fill },
         { title: "Create Carton", url: "/app/spo/services/createCarton", icon: BiSolidPackage },
         { title: "Print Slip", url: "/app/spo/services/printSlip", icon: MdLocalPrintshop },
    ]
  return (
    <SidebarProvider>
      <AppSidebar items={items} userInfo={ 
        {name: "John Doe", role: "Admin (SPO)"}
      }
      onLogout={handleLogout}
      
      />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

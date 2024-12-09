"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MdDashboard } from "react-icons/md";
import { MdLocalPrintshop } from "react-icons/md";
import { BiSolidPackage } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdQrCodeScanner } from "react-icons/md";
import { FcInspection } from "react-icons/fc";

export default function Layout({ children }: { children: React.ReactNode }) {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const items = [
    { title: "Dashboard", url: "/spo", icon: MdDashboard },
    { title: "Check In", url: "/spo/services/checkIn", icon: FcInspection },
    { title: "Check Out", url: "/spo/services/checkOut", icon: MdQrCodeScanner },
    { title: "Complains", url: "/spo/services/complaints", icon: RiCustomerService2Fill },
    { title: "Create Carton", url: "/spo/services/createCarton", icon: BiSolidPackage },
    { title: "Print Slip", url: "/spo/services/printSlip", icon: MdLocalPrintshop },
  ];

  return (
    <SidebarProvider>
      
        
        
        
        {/* Main Content */}
        <main className="flex justify-between w-full mx-auto  bg-screenBackgroundColor p-6 md:p-8 lg:px-12 lg:py-5 overflow-auto">
        <AppSidebar
          items={items}
          userInfo={{ name: "Priyanshu Tiwari", role: "SPO Employee" }}
          onLogout={handleLogout}
        />
       
        <div className="w-full">
          {children}
          </div>
        </main>
      
    </SidebarProvider>
  );
}

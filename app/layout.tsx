"use client";
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"; // Assuming this is your sidebar component
import { MdDashboard } from "react-icons/md"; // Import icons or other elements as needed

import "./globals.css";
import { Provider } from "react-redux";
import store from "@/Redux/store";

export default function Layout({ children }: { children: React.ReactNode }) {
  

  return (
    <html lang="en">
      <head>
        <title>Postie Dashboard</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="h-full">
     
         
      <Provider store={store}>
            {/* Main Content */}
            <main className=" bg-screenBackgroundColor  overflow-auto">
              {children}
            </main>
          
        </Provider>
      </body>
    </html>
  );
}

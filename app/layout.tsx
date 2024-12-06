// app/layout.tsx

import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Postie Dashboard</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </head>
      <body>
        <SidebarProvider>
          <main>
           
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}

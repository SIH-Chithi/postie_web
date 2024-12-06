
"use client";
import { Calendar, Home, Inbox, Search, Settings, LogOut, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type SidebarItem = {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

interface UserInfo {
  name: string;
  role: "Admin (SPO)" | "Employee (HPO)";
}

interface AppSidebarProps {
  items: SidebarItem[];
  userInfo: UserInfo;
  onLogout: () => void; // Logout handler function
}

export function AppSidebar({ items, userInfo, onLogout }: AppSidebarProps) {
  return (
    <Sidebar className=" shadow-lg w-64" variant="myMode">
      {/* User Info */}
      <div className="p-4 flex flex-col items-center border-b border-gray-200">
        <div className="bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center">
          <User className="w-8 h-8 text-gray-600" />
        </div>
        <h2 className="text-lg font-semibold mt-2">{userInfo.name}</h2>
        <span className="text-sm text-gray-500">{userInfo.role}</span>
      </div>

      <SidebarContent>
       
        <SidebarGroup>
          
          <SidebarGroupContent className="mt-5">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-md transition"
                    >
                      <item.icon className="w-5 h-5 text-gray-600" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Logout... */}
      <div className="mt-auto p-4 border-t border-gray-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 p-3 text-red-600 hover:bg-red-50 rounded-md transition"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </Sidebar>
  );
}

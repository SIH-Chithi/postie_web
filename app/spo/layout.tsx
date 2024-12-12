"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MdDashboard, MdLocalPrintshop, MdQrCodeScanner } from "react-icons/md";
import { BiSolidPackage } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FcInspection } from "react-icons/fc";
import { useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { fetchData, resetUserData } from "@/Redux/slices/userDataSlice";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [hasFetched, setHasFetched] = useState(false);

  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector((state) => state.userData);
  const router = useRouter();

  // Memoize the `items` array to prevent re-creation on each render
  const items = useMemo(
    () => [
      { title: "Dashboard", url: "/spo", icon: MdDashboard },
      { title: "Check In", url: "/spo/services/checkIn", icon: FcInspection },
      { title: "Check Out", url: "/spo/services/checkOut", icon: MdQrCodeScanner },
      { title: "Complains", url: "/spo/services/complaints", icon: RiCustomerService2Fill },
      { title: "Print Slip", url: "/spo/services/printSlip", icon: MdLocalPrintshop },
    ],
    []
  );

  // Ensure `useEffect` has consistent dependencies
  useEffect(() => {
    if (!hasFetched && status === "idle") {
      dispatch(fetchData());
      setHasFetched(true);
    }
  }, [hasFetched, status, dispatch]);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(resetUserData());
    router.replace("/auth/signIn");
  };

  return (
    <SidebarProvider>
      <ProtectedRoute allowedType="spo">
        <main className="flex justify-between w-full mx-auto bg-screenBackgroundColor p-6 md:p-8 lg:px-12 lg:py-5 overflow-auto">
          <AppSidebar
            items={items}
            userInfo={{
              name: `${data?.first_name || "Guest"} ${data?.last_name || ""}`,
              role: `${data?.type?.toUpperCase() || "UNKNOWN"} Employee`,
            }}
            onLogout={handleLogout}
          />
          <div className="w-full">{children}</div>
        </main>
      </ProtectedRoute>
    </SidebarProvider>
  );
}

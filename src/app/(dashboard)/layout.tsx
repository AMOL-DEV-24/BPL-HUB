"use client";
import { useState } from "react";

import MobileDrawer from "@/components/layout/MobileDrawer/MobileDrawer";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import MobileTopbar from "@/components/mobileTopbar/MobileTopBar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="dashboard-layout">

      {/* DESKTOP ONLY — fixed sidebar, always visible */}
      <Sidebar />

      {/* MOBILE ONLY — fixed topbar with hamburger */}
      <MobileTopbar onMenuClick={() => setDrawerOpen(true)} />

      {/* MOBILE ONLY — slide-in drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* MAIN CONTENT */}
      <main className="dashboard-main">
        {children}
      </main>

    </div>
  );
}
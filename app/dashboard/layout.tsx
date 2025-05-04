"use client";
import React from "react";

import AppNav from "@/components/nav/AppNav";
import AppSidebar from "@/components/nav/AppSidebar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AppNav />
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="container bg-gray-100">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;

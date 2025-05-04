"use client";
import React, { useEffect, useState } from "react";

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName }) => {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    // Set today's date only on the client side
    const date = new Date().toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setToday(date);
  }, []);

  return (
    <div className="flex flex-col gap-1 px-4 pb-6 pt-3">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        Welcome {userName}!
      </h1>
      <p className="text-sm text-gray-500">{today}</p>
    </div>
  );
};

export default DashboardHeader;

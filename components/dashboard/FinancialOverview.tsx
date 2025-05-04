import React from "react";

import AppBadge from "@/components/ui/AppBadge";

import FinancialOverviewChart from "./FinancialOverviewChart";

interface FinancialOverviewProps {
  title: string;
  value: number;
  change: string;
  isPositiveChange: boolean;
}

function FinancialOverview({
  title,
  value,
  isPositiveChange,
  change,
}: FinancialOverviewProps) {
  return (
    <div>
      <div className="flex flex-col p-4">
        <div className="flex justify-between">
          <p className="text-base text-gray-500 ">{title}</p>
          <AppBadge color={isPositiveChange ? "green" : "red"}>
            {change}
          </AppBadge>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold text-gray-900">${value / 1000}k</h2>
        </div>
      </div>
      <FinancialOverviewChart />
    </div>
  );
}

export default FinancialOverview;

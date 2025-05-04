"use client";
import React from "react";

import { DashboardBreakdown } from "@/types";

import FinancialBreakdownChart from "@/components/dashboard/FinancialBreakdownChart";
import SummaryStat from "@/components/dashboard/SummaryStat";

interface FinancialBreakdownProps {
  breakDownData: DashboardBreakdown[];
}

export function FinancialBreakdown({ breakDownData }: FinancialBreakdownProps) {
  return (
    <>
      <div className="flex gap-8 pb-6">
        {breakDownData.map((segment) => {
          return (
            <SummaryStat
              key={segment.label}
              title={segment.label}
              value={`${segment.percentage}%`}
              legend={segment.value}
            />
          );
        })}
      </div>
      <div className="flex w-[345px]">
        <FinancialBreakdownChart data={breakDownData} />
      </div>
    </>
  );
}

export default FinancialBreakdown;

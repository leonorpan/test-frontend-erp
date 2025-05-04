"use client";
import { HR, Button } from "flowbite-react";
import React from "react";

import {
  DashboardBreakdown,
  DashboardFinancial,
  DashboardStat,
  Maybe,
} from "@/types";

import SummaryStat from "@/components/dashboard/SummaryStat";

import FinancialBreakdown from "./FinancialBreakdown";
import FinancialOverview from "./FinancialOverview";

interface SummaryCardsProps {
  stats: Maybe<DashboardStat[]>;
  financials: Maybe<DashboardFinancial[]>;
  breakdown: Maybe<DashboardBreakdown[]>;
}

function SummaryCard({ stats, financials, breakdown }: SummaryCardsProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      {/* Stats Section */}
      <div className="flex flex-wrap gap-4">
        {stats?.map((stat) => {
          return <SummaryStat key={stat.title} {...stat}></SummaryStat>;
        })}
      </div>
      <HR className="my-4" />
      {/* Financials Section */}
      <div className="mt-4 flex flex-wrap gap-4">
        {financials?.map((financial, index) => {
          return (
            <FinancialOverview
              key={financial.title}
              title={financial.title}
              value={financial.value}
              change={financial.change}
              isPositiveChange={financial.isPositiveChange}
            ></FinancialOverview>
          );
        })}
        {/* Breakdown Section */}
        <div className="flex grow flex-col flex-wrap">
          {breakdown && <FinancialBreakdown breakDownData={breakdown} />}
        </div>
      </div>
      <HR className="my-4" />
      <Button color="light" outline size="xs">
        View Financial Reports
      </Button>
    </div>
  );
}

export default SummaryCard;

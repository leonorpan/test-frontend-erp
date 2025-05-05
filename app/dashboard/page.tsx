"use client";
import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";

import { useAuth } from "@/context";
import { useDashboard } from "@/hooks";
import {
  DashboardAccountantResponse,
  DashboardBreakdown,
  DashboardFinancial,
  DashboardStat,
  Maybe,
} from "@/types";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import FinancialOverviewSection from "@/components/dashboard/FinancialOverviewSection";
import InventoryTable from "@/components/dashboard/InventoryTable";
import InvoicesTable from "@/components/dashboard/InvoicesTable";
import ReceiptsTable from "@/components/dashboard/ReceiptsTable";
import SummaryCard from "@/components/dashboard/SummaryCard";

import {
  parseDashboardFinancialData,
  parseDashboardStatsData,
  parseDashboardBreakdownData,
} from "./utils";

const DashboardPage = () => {
  const { data: dashboardData, isLoading, error } = useDashboard();
  const auth = useAuth();
  const [dashboardStats, setDashboardStats] =
    useState<Maybe<DashboardStat[]>>(null);
  const [dashboardFinancials, setDashboardFinancials] =
    useState<Maybe<DashboardFinancial[]>>(null);
  const [breakDownData, setBreakDownData] =
    useState<Maybe<DashboardBreakdown[]>>(null);

  useEffect(() => {
    if (isLoading || !dashboardData) return;
    const parsedStats = parseDashboardStatsData(
      dashboardData as DashboardAccountantResponse,
    );
    setDashboardStats(parsedStats);
    const parsedFinancials = parseDashboardFinancialData(
      dashboardData as DashboardAccountantResponse,
    );
    setDashboardFinancials(parsedFinancials);
    const parsedBreakdownFinancialData = parseDashboardBreakdownData(
      dashboardData as DashboardAccountantResponse,
    );
    setBreakDownData(parsedBreakdownFinancialData);
  }, [dashboardData, isLoading]);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Something went wrong!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-4 pr-8">
      <DashboardHeader userName={auth?.user?.first_name || "Bellinda"} />
      <SummaryCard
        stats={dashboardStats}
        financials={dashboardFinancials}
        breakdown={breakDownData}
      />
      {/* <FinancialOverviewSection />
      <InvoicesTable />
      <ReceiptsTable />
      <InventoryTable /> */}
    </div>
  );
};

export default DashboardPage;

import { DashboardAccountantResponse } from "./api";

export type DashboardStat = {
  title: string;
  value: string;
  change: string;
  statType: "number" | "time";
  legend: string;
  positiveIsGood: boolean;
};

export type DashboardFinancial = {
  title: string;
  value: number;
  change: string;
  isPositiveChange: boolean;
};

export type DashboardBreakdown = {
  label: string;
  value: string;
  percentage: number;
};

export type FinancialConfig = {
  title: string;
  value: number;
  change: string;
  positiveIsGood: boolean;
};

export interface StatConfig {
  key: keyof DashboardAccountantResponse["stats"];
  title: string;
  changeUnit: "number" | "percentage";
  statType: "number" | "time";
  legend: string;
  isPositiveGood: (change: number) => boolean;
}

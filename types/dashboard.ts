import { DashboardAccountantResponse } from "./api";

export type DashboardStat = {
  title: string;
  value: number;
  change: string;
  changeUnit: "percentage" | "number" | "time";
  statType: "number" | "time";
  legend: string;
  positiveIsGood: boolean;
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

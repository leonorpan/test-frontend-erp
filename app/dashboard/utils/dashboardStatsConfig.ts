import { StatConfig } from "@/types";

export const statConfigs: StatConfig[] = [
  {
    key: "outstanding_invoices",
    title: "Outstanding Invoices",
    changeUnit: "percentage",
    statType: "number",
    legend: "vs last day",
    isPositiveGood: (change) => change < 0,
  },
  {
    key: "average_collection_period",
    title: "Average Collection Period",
    changeUnit: "number",
    statType: "time",
    legend: "vs last month",
    isPositiveGood: (change) => change < 0,
  },
  {
    key: "gross_profit_margin",
    title: "Gross Profit Margin",
    changeUnit: "percentage",
    statType: "number",
    legend: "vs last month",
    isPositiveGood: (change) => change > 0,
  },
  {
    key: "inventory_turnover",
    title: "Inventory Turnover",
    changeUnit: "number",
    statType: "number",
    legend: "vs last month",
    isPositiveGood: (change) => change > 0,
  },
  {
    key: "online_payments",
    title: "Online Payments",
    changeUnit: "percentage",
    statType: "number",
    legend: "vs last month",
    isPositiveGood: (change) => change > 0,
  },
];

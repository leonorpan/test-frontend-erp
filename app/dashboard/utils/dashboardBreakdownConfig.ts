export interface BreakdownConfig {
  key: "profit" | "expenses" | "assets";
  title: string;
  amountKey: "revenue" | "expenses" | "stock_value";
}

export const breakdownConfigs: BreakdownConfig[] = [
  {
    key: "profit",
    title: "Profit",
    amountKey: "revenue",
  },
  {
    key: "expenses",
    title: "Expenses",
    amountKey: "expenses",
  },
  {
    key: "assets",
    title: "Assets",
    amountKey: "stock_value",
  },
];

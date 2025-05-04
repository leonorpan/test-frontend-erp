interface FinancialConfig {
  key: "revenue" | "expenses" | "stock_value";
  title: string;
  isPositiveGood: (change: number) => boolean;
}

export const financialConfigs: FinancialConfig[] = [
  {
    key: "revenue",
    title: "Revenue",
    isPositiveGood: (change) => change > 0,
  },
  {
    key: "expenses",
    title: "Expenses",
    isPositiveGood: (change) => change < 0,
  },
  {
    key: "stock_value",
    title: "Stock Value",
    isPositiveGood: (change) => change > 0,
  },
];

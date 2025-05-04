type ProfitDistributionKey = "profit" | "expenses" | "assets";

type ProfitDistribution = Record<ProfitDistributionKey, number>;

export interface DashboardAccountantResponse {
  stats: {
    outstanding_invoices: number;
    average_collection_period: number | string;
    gross_profit_margin: number;
    inventory_turnover: string;
    online_payments: number;
  };
  financials: {
    revenue: number;
    expenses: number;
    stock_value: number;
    profit_distribution: ProfitDistribution;
  };
  change: {
    outstanding_invoices: number;
    average_collection_period: number;
    gross_profit_margin: number;
    inventory_turnover: number;
    online_payments: number;
    revenue: number;
    expenses: number;
    stock_value: number;
  };
  period: {
    start: string;
    end: string;
  };
}

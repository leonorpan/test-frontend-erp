export interface DashboardAccountantResponse {
  stats: {
    outstanding_invoices: number;
    average_collection_period: number;
    gross_profit_margin: number;
    inventory_turnover: string;
    online_payments: number;
  };
  financials: {
    revenue: number;
    expenses: number;
    stock_value: number;
    profit_distribution: Record<string, unknown>;
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
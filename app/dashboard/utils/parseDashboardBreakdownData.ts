import { DashboardAccountantResponse, DashboardBreakdown } from "@/types";

import { breakdownConfigs, BreakdownConfig } from "./dashboardBreakdownConfig";
import { formatCurrency } from "./money";

export function parseDashboardBreakdownData(
  data: DashboardAccountantResponse,
): DashboardBreakdown[] {
  return breakdownConfigs.map((config: BreakdownConfig) => {
    const entryPercentage = data.financials.profit_distribution[config.key];
    const currentValue = `$${formatCurrency(data.financials[config.amountKey])}`;

    return {
      label: config.title,
      value: currentValue,
      percentage: entryPercentage,
    };
  });
}

import { DashboardAccountantResponse, DashboardFinancial } from "@/types";

import { financialConfigs } from "./dashboardFinancialsConfig";

export function parseDashboardFinancialData(
  data: DashboardAccountantResponse,
): DashboardFinancial[] {
  return financialConfigs.map((config) => {
    const currentValue = data.financials[config.key] as number;
    const changeValue = data.change[config.key];
    const formattedChangeValue = `${changeValue > 0 ? "↑" : "↓"} ${data.change[config.key]} %`;
    const isPositiveChange =
      (config.isPositiveGood(changeValue) && changeValue > 0) ||
      (!config.isPositiveGood(changeValue) && changeValue < 0);

    return {
      title: config.title,
      value: currentValue,
      change: formattedChangeValue,
      isPositiveChange,
    };
  });
}

import { DashboardAccountantResponse, DashboardStat } from "@/types";

import { statConfigs } from "./dashboardStatsConfig";
import { formatCurrency } from "./money";

export function parseDashboardStatsData(
  data: DashboardAccountantResponse,
): DashboardStat[] {
  return statConfigs.map((config) => {
    const currentValue = data.stats[config.key] as number;
    const changeValue = data.change[config.key] as number;
    const isGood = config.isPositiveGood(changeValue);
    const percentageChange = `${changeValue > 0 ? "↑" : "↓"} ${changeValue.toFixed(1)} %`;

    return {
      title: config.title,
      value:
        typeof currentValue === "number"
          ? formatCurrency(currentValue)
          : currentValue,
      change: percentageChange,
      statType: config.statType,
      legend: config.legend,
      positiveIsGood: isGood,
    };
  });
}

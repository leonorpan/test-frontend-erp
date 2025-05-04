import React from "react";

import AppBadge from "@/components/ui/AppBadge";

interface SummaryStatProps {
  title: string;
  value: string | number;
  change?: string;
  legend: string;
  positiveIsGood?: boolean;
}

export default function SummaryStat({
  title,
  value,
  change,
  legend,
  positiveIsGood,
}: SummaryStatProps) {
  return (
    <div className="p-4">
      <p className="mb-2 text-gray-500">{title}</p>
      <div className="flex items-center">
        <h1 className="mr-2 text-2xl font-bold">{value}</h1>
        {change && (
          <AppBadge color={positiveIsGood ? "green" : "red"}>{change}</AppBadge>
        )}
      </div>
      <p className="mt-2 text-gray-500">{legend}</p>
    </div>
  );
}

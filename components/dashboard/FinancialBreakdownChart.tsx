"use client";

import ReactECharts from "echarts-for-react";
import React from "react";

interface FinancialItem {
  label: string;
  value: string;
  percentage: number;
}

interface FinancialBreakdownProps {
  data: FinancialItem[];
}

export default function FinancialBreakdownChartReact({
  data,
}: FinancialBreakdownProps) {
  const colorPalette = [
    "#1C64F2", // Profit
    "#16BDCA", // Expenses
    "#C81E1E", // Assets
  ];
  const chartOptions = {
    tooltip: {
      trigger: "item",
    },
    grid: {
      left: "0%",
      right: "0%",
      top: "0%",
      bottom: "0%",
      containLabel: false,
    },
    xAxis: {
      type: "value",
      show: false,
      max: 100,
    },
    yAxis: {
      type: "category",
      data: [""],
      show: false,
    },
    series: data.map((item, index) => ({
      type: "bar",
      name: item.label,
      data: [item.percentage],
      barWidth: "100%",
      barGap: "0%",
      stack: "total",
      itemStyle: {
        color:
          index % 3 === 0
            ? colorPalette[0]
            : index % 3 === 1
              ? colorPalette[1]
              : colorPalette[2],
        borderRadius: [
          index === 0 ? 4 : 0, // top-left
          index === data.length - 1 ? 4 : 0, // top-right
          index === data.length - 1 ? 4 : 0, // bottom-right
          index === 0 ? 4 : 0, // bottom-left
        ],
      },
      emphasis: {
        focus: "self",
      },
    })),
  };

  return (
    <div className="w-full px-4">
      <div className="h-5 w-full">
        <ReactECharts
          option={chartOptions}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="mt-5 flex justify-center gap-4">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <div
              className="size-2 rounded-full"
              style={{
                backgroundColor:
                  index % 3 === 0
                    ? colorPalette[0]
                    : index % 3 === 1
                      ? colorPalette[1]
                      : colorPalette[2],
              }}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

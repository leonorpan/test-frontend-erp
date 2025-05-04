import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import React from "react";

function FinancialOverviewChart() {
  const chartOptions = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      show: false,
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      show: false,
      boundaryGap: [0, "5%"],
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: 10,
      containLabel: false,
    },
    series: [
      {
        data: [1200, 2500, 1800, 3200, 4100, 3000, 4200],
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          color: "#5585F2",
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(85, 133, 242, 0.75)",
            },
            {
              offset: 1,
              color: "rgba(85, 133, 242, 0)",
            },
          ]),
        },
      },
    ],
  };

  return (
    <div className="h-[120px] w-[300px] bg-white">
      <ReactECharts
        option={chartOptions}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}

export default FinancialOverviewChart;

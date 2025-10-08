"use client";
import React from "react";
import { IndicatorChartComponentProps } from "./indicator-types";
import { cn } from "../../lib/utils";
import { Plotly } from "../../utility/Suspensed-plotly";

const baseClass = "size-full grid place-items-center";

export const Indicator: React.FC<IndicatorChartComponentProps> = ({
  data,
  layout,
  className,
}) => {
  const config = { responsive: true };

  if (!data || data.length === 0) {
    return (
      <div className="size-full grid place-items-center text-gray-500">
        No data found, please add the data.
      </div>
    );
  }
  return (
    <div className={cn(baseClass, className)}>
      <Plotly
        className="size-full"
        data={data}
        layout={layout || {}}
        config={config}
      />
    </div>
  );
};

"use client";
import React from "react";
import { BarChartComponentProps } from "./bar-types";
import dynamic from "next/dynamic";
import type { PlotParams } from "react-plotly.js";

const Plot = dynamic<PlotParams>(() => import("react-plotly.js") as any, {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export const Bar: React.FC<BarChartComponentProps> = ({ data }) => {
  const config = { responsive: true };

  if (!data || data.length === 0) {
    return (
      <div className="size-full grid place-items-center text-gray-500">
        No data found, please add the data.
      </div>
    );
  }
  return (
    <div className="size-full grid place-items-center">
      <Plot
        className="size-full"
        data={data || []}
        layout={{
          title: { text: "A Fancy Plot" },
        }}
        config={config}
      />
    </div>
  );
};

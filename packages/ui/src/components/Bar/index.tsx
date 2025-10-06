"use client";
import React from "react";
import { BarChartComponentProps } from "./bar-types";
import dynamic from "next/dynamic";
import type { PlotParams } from "react-plotly.js";

const Plot = dynamic<PlotParams>(() => import("react-plotly.js") as any, {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export const Bar: React.FC<BarChartComponentProps> = () => {
  const config = { responsive: true };
  return (
    <div className="w-1/2 grid place-items-center">
      <Plot
        className="size-full"
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{
          width: 600,
          height: 400,
          title: { text: "A Fancy Plot" },
        }}
        config={config}
      />
    </div>
  );
};

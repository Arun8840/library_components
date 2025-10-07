import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import type { PlotParams } from "react-plotly.js";

const Plot = dynamic<PlotParams>(() => import("react-plotly.js") as any, {
  ssr: false,
  loading: () => (
    <div className="size-full grid place-items-center">
      <Loader2 className="animate-spin origin-center text-blue-500" size={18} />
    </div>
  ),
});

export const Plotly = ({ ...props }: PlotParams) => {
  return (
    <>
      <Plot {...props} />
    </>
  );
};

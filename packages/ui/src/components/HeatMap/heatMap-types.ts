export interface HeatMapChartComponentProps {
  data?: Record<string, string>[] | null;
  layout?: Partial<import("plotly.js").Layout>;
  className?: string;
}

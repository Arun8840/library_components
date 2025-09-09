export type ToggleGroupVariant = "default" | "outline";

export interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ToggleGroupVariant;
}
export interface ToggleGroupItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
}

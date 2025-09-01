import { ProgressHTMLAttributes } from "react";

export interface ProgressProps
  extends ProgressHTMLAttributes<HTMLProgressElement> {
  label?: string | null;
  disabled?: boolean;
}

import { InputHTMLAttributes } from "react";

export interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  variant?: "default" | "primary" | "danger" | "success" | "warning";
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export { cva, type VariantProps } from "class-variance-authority";

/**
 * Combines classNames with Tailwind merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

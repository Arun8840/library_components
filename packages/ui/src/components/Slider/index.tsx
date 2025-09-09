import React from "react";
import { SliderProps } from "./slider-types";
import { cn } from "../../lib/utils";

const sliderVariants: Record<string, string> = {
  default: "accent-gray-200",
  primary: "accent-blue-500",
  danger: "accent-red-500",
  success: "accent-green-500",
  warning: "accent-yellow-400",
};

const baseSliderClass =
  "w-full h-2 bg-gray-200 rounded-lg  cursor-pointer disabled:pointer-events-none";
export const Slider: React.FC<SliderProps> = ({
  className,
  variant = "primary",
  ...otherProps
}) => {
  const variantValue = sliderVariants[variant];
  return (
    <input
      className={cn(baseSliderClass, variantValue, className)}
      type="range"
      {...otherProps}
    />
  );
};

Slider.displayName = "Slider";

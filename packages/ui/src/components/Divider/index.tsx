import React, { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface DividerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  direction?: "vertical" | "horizontal";
}

const directionProp = {
  vertical: "border-l  border-stone-300 w-px   h-full mx-2",
  horizontal: "border-t border-stone-300  w-full my-2",
};
export const Divider: React.FC<DividerProps> = ({
  className,
  direction = "horizontal",
}) => {
  const directionClass = directionProp[direction];
  return <div className={cn(directionClass, className)} />;
};

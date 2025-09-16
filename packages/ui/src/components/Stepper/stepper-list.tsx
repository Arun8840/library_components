import React from "react";
import { StepperListProps } from "./stepper-types";
import { cn } from "../../lib/utils";

const baseClass = "flex justify-between list-none";
export const StepList: React.FC<StepperListProps> = ({
  className,
  children,
}) => {
  const items = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...(child.props || {}),
        stepIndex: index,
      });
    }
    return child;
  });
  return <div className={cn(baseClass, className)}>{items}</div>;
};

StepList.displayName = "StepList";

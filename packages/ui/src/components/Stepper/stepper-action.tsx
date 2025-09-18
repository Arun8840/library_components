"use client";
import React, { HTMLAttributes } from "react";
import { Button } from "../Button";
import { useStepperContext } from "./stepper-root";
import { cn } from "../../lib/utils";

const baseClass = "flex pt-3 justify-end items-center gap-2";
export const StepperAction: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { next, prev, existSteps, startSteps } = useStepperContext();

  return (
    <div {...props} className={cn(baseClass, className)}>
      <div className="flex items-center gap-2">
        <Button onClick={prev} disabled={startSteps}>
          Prev
        </Button>
        <Button onClick={next} disabled={existSteps}>
          Next
        </Button>
      </div>
    </div>
  );
};

StepperAction.displayName = "StepperAction";

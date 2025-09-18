import React, { createContext, useContext, useState } from "react";
import { StepperContextType, StepperRootProps } from "./stepper-types";
import { cn } from "../../lib/utils";
import useStep from "./hook/use-step";
import { StepperAction } from "./stepper-action";

const StepperContext = createContext<StepperContextType | null>(null);

const baseClass = "flex flex-col gap-4 group/stepper";
const StepperRoot: React.FC<StepperRootProps> = ({
  children,
  className,
  showAction = true,
  active = 0,
  maxStep = 0,
}) => {
  const stepValue = useStep(active, maxStep);
  return (
    <StepperContext.Provider value={stepValue}>
      <div className={cn(baseClass, className)}>{children}</div>
      {showAction && <StepperAction />}
    </StepperContext.Provider>
  );
};

export const useStepperContext = () => {
  const context = useContext(StepperContext);
  if (!context)
    throw new Error("Stepper components must be used within Stepper");
  return context;
};

export default StepperRoot;

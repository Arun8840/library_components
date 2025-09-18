"use client";
import React from "react";
import { StepperItemProps } from "./stepper-types";
import { useStepperContext } from "./stepper-root";

export const StepItem: React.FC<StepperItemProps> = ({
  className,
  children,
  stepIndex = 0,
}) => {
  const step = stepIndex + 1;

  const { active, setActive } = useStepperContext();
  const isActive = step === active;

  return (
    <li
      aria-label="stepper-content-container"
      data-active={isActive}
      className="flex-1 flex flex-col relative group"
    >
      {/* //* pointer */}
      <div className="flex items-center">
        <div
          aria-label="stpper-content"
          onClick={() => setActive(step)}
          className="rounded-full size-7 grid place-items-center bg-[var(--secondary)] group-data-[active=true]:bg-[var(--primary)] group-data-[active=true]:text-[var(--secondary)] cursor-pointer transition-colors "
        >
          {step}
        </div>
        <div className="border-t border-t-[var(--muted)] flex-1" />
      </div>

      {/* //* content */}
      <div className="group-data-[active=true]:text-[var(--primary)] text-[var(--muted-foreground)] transition-transform scale-95 group-data-[active=true]:scale-none">
        {children}
      </div>
    </li>
  );
};

StepItem.displayName = "StepItem";

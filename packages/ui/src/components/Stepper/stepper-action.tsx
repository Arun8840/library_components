"use client";
import { Button } from "../Button";
import { useStepperContext } from "./stepper-root";

export const StepperAction = () => {
  const { next, prev, reset } = useStepperContext();
  return (
    <div className="flex pt-3 justify-end items-center gap-2">
      <div className="flex items-center gap-2">
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  );
};

StepperAction.displayName = "StepperAction";

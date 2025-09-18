import { useState } from "react";

function useStep(initialStep: number = 0, maxStep?: number) {
  const [active, setActive] = useState(initialStep);

  const next = () => {
    setActive((prev) =>
      typeof maxStep === "number" ? Math.min(prev + 1, maxStep) : prev + 1
    );
  };

  const prev = () => {
    setActive((prev) => Math.max(prev - 1, 0));
  };

  const reset = () => {
    setActive(initialStep);
  };

  // Disable previous button when on the first step
  const startSteps = active === 0;
  const existSteps = active === maxStep;

  return {
    active,
    setActive,
    next,
    prev,
    reset,
    existSteps,
    startSteps,
  };
}

export default useStep;

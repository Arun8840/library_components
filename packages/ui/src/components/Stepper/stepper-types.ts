import { HTMLAttributes } from "react";

export type DirectionType = "vertical" | "horizontal";

export interface StepperRootProps {
  children?: React.ReactNode;
  className?: string;
  active?: number;
  showAction?: boolean;
  maxStep: number;
}

export interface StepperListProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export interface StepperItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  stepIndex?: number;
}

export interface StepperContextType {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  next: () => void;
  prev: () => void;
  reset: () => void;
}

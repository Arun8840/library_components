import React from "react";
import { TimelineTitleProps } from "./timeline-types";
import { cn } from "../../lib/utils";

const baseClass = "font-semibold text-lg mb-1";

export const TimelineTitle: React.FC<TimelineTitleProps> = ({
  children,
  className = "",
}) => {
  return <div className={cn(baseClass, className)}>{children}</div>;
};

TimelineTitle.displayName = "TimelineTitle";

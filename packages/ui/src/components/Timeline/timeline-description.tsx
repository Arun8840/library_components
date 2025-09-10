import React from "react";
import { TimelineDescriptionProps, TimelineTitleProps } from "./timeline-types";
import { cn } from "../../lib/utils";

const baseClass = "text-gray-600 text-base mb-2";

export const TimelineDescription: React.FC<TimelineDescriptionProps> = ({
  children,
  className = "",
}) => {
  return <p className={cn(baseClass, className)}>{children}</p>;
};

TimelineDescription.displayName = "TimelineDescription";

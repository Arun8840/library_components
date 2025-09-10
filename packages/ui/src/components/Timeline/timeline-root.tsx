import React from "react";
import { TimelineRootProps } from "./timeline-types";
import { cn } from "../../lib/utils";
const baseClass = "border-l border-gray-200 pl-8 flex flex-col gap-5  mx-auto";

const TimelineRoot: React.FC<TimelineRootProps> = ({ children, className }) => {
  return <div className={cn(baseClass, className)}>{children}</div>;
};

export default TimelineRoot;

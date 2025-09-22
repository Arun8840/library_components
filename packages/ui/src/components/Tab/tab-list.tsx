import React from "react";
import { TabListProps } from "./tab-types";
import { cn } from "../../lib/utils";

const baseClass = `p-2 rounded-xl bg-gray-100 flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 max-w-screen`;
export const TabList: React.FC<TabListProps> = ({ className, children }) => {
  return <div className={cn(baseClass, className)}>{children}</div>;
};

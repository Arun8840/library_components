import React, { Suspense } from "react";
import { TabContentProps } from "./tab-types";
import { cn } from "../../lib/utils";
import { useTabContext } from "./tab-root";

const baseClass = "bg-white p-3 rounded-lg border border-gray-200";
export const TabContent: React.FC<TabContentProps> = ({
  value,
  children,
  className,
  ...otherProps
}) => {
  const { currentTab } = useTabContext();

  if (currentTab !== value) return null;
  return (
    <div className={cn(baseClass, className)} {...otherProps}>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
};

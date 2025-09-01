import React from "react"
import { TabContentProps } from "./tab-types"
import { cn } from "../../lib/utils"
import { useTabContext } from "./tab-root"

const baseClass = "bg-white p-3 rounded-lg border border-gray-200"
export const TabContent: React.FC<TabContentProps> = ({
  value,
  children,
  className,
  ...otherProps
}) => {
  const { currentTab } = useTabContext()

  if (currentTab !== value) return
  return (
    <div className={cn(baseClass, className)} {...otherProps}>
      {children}
    </div>
  )
}

import React from "react"
import { TabListProps } from "./tab-types"

export const TabList: React.FC<TabListProps> = ({ className, children }) => {
  return (
    <div className="p-2 rounded-xl bg-gray-100 flex items-center gap-2">
      {children}
    </div>
  )
}

"use client"
import React, { createContext, useContext, useState } from "react"
import { TabContextType, TabRootProps } from "./tab-types"
import { cn } from "../../lib/utils"

const base = "flex flex-col gap-1" // Base classes for the TabRoot component

const TabContext = createContext<TabContextType | null>(null)
export const TabRoot: React.FC<TabRootProps> = ({
  children,
  value,
  className,
  ...otherProps
}) => {
  const [currentTab, setTab] = useState<string | number>(value ?? "")

  const handleChangeTab = (triggerId: string | number) => {
    setTab(triggerId)
  }

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab: handleChangeTab }}>
      <div className={cn(base, className)} {...otherProps}>
        {children}
      </div>
    </TabContext.Provider>
  )
}

export const useTabContext = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error("useTabContext must be used within a TabRoot component")
  }
  return context
}

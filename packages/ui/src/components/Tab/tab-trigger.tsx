import React from "react"
import { TabTriggerProps } from "./tab-types"
import { cn } from "../../lib/utils"
import { useTabContext } from "./tab-root"

const base =
  "data-[active=true]:bg-white inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
export const TabTrigger: React.FC<TabTriggerProps> = ({
  trigger,
  className,
  children,
}) => {
  const { currentTab, setCurrentTab } = useTabContext()

  const isActive = trigger === currentTab
  return (
    <button
      data-active={isActive}
      onClick={() => setCurrentTab(trigger)}
      className={cn(base, className)}
    >
      {children}
    </button>
  )
}

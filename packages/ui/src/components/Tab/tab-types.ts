import React from "react"

export interface TabRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export interface TabContextType {
  currentTab: string | number
  setCurrentTab: (triggerId: string | number) => void
}

export interface TabTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  trigger: string
}

export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  value: string
}

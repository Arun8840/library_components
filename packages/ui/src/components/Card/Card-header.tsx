import React from "react";
import { CardHeaderProps } from "./card-types";
import { cn } from "../../lib/utils";

const baseClass = "flex flex-col space-y-1.5 p-0";

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  // Normalize children to array
  const childArray = React.Children.toArray(children);

  // Separate CardAction children from others
  const leftChildren: React.ReactNode[] = [];
  const rightChildren: React.ReactNode[] = [];

  childArray.forEach((child) => {
    if (
      React.isValidElement(child) &&
      (child.type as any).displayName === "CardAction"
    ) {
      rightChildren.push(child);
    } else {
      leftChildren.push(child);
    }
  });

  // If there are CardAction children, use flex-row with justify-between
  if (rightChildren.length > 0) {
    return (
      <div
        className={cn(
          "flex flex-row items-start justify-between p-0 space-y-0",
          className
        )}
        {...props}
      >
        <div className="flex flex-col space-y-1.5">{leftChildren}</div>
        <div className="flex flex-row items-center space-x-2">
          {rightChildren}
        </div>
      </div>
    );
  }

  // Default: stack all children vertically
  return (
    <div className={cn(baseClass, className)} {...props}>
      {children}
    </div>
  );
};

CardHeader.displayName = "CardHeader";

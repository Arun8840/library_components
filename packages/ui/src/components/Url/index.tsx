import React from "react";
import { UrlProps } from "./url-types";
import { cn } from "../../lib/utils";

const baseClass =
  "text-sm cursor-pointer text-blue-500 underline underline-offset-4 aria-disabled:text-gray-400 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed";
export const Url: React.FC<UrlProps> = ({
  href,
  label,
  rel,
  className,
  icon,
  disabled,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <a
      href={disabled ? undefined : href}
      rel={rel}
      className={cn(baseClass, className)}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </a>
  );
};

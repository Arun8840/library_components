import React from "react";
import { AvatarProps } from "./avatar-types";
import { cn } from "../../lib/utils";

const baseClass = "rounded-full size-10 overflow-hidden";
export const Avatar: React.FC<AvatarProps> = ({
  className,
  fallBack,
  disabled = false,
  src = null,
  ...props
}) => {
  return (
    <div title={fallBack} className={cn(baseClass, className)}>
      {src ? (
        <img
          aria-disabled={disabled}
          src={src ?? ""}
          alt={fallBack}
          className="size-full aria-disabled:grayscale-100 aria-disabled:opacity-75 aria-disabled:cursor-not-allowed"
          {...props}
        />
      ) : (
        <div
          aria-disabled={disabled}
          className="bg-white size-full grid place-items-center text-stone-500 aria-disabled:opacity-75 aria-disabled:cursor-not-allowed"
        >
          {fallBack}
        </div>
      )}
    </div>
  );
};

Avatar.displayName = "Avatar";

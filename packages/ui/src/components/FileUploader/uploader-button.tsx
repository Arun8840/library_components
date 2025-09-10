"use client";
import React from "react";
import { UploaderButtonProps } from "./uploader-types";
import { Button } from "../Button";
import { cn } from "../../lib/utils";
import { useUploaderContext } from "./uploader-root";
import { Avatar } from "../Avatar";

const baseClass = "inline-block w-fit";
export const UploaderButton: React.FC<UploaderButtonProps> = ({
  className,
  children,
}) => {
  const { file, uploadImage, reset, status } = useUploaderContext();

  // Always call hooks in the same order, don't conditionally call useMemo
  const fileUrl = React.useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  if (!file) return null;

  return (
    <div className="flex justify-between gap-2">
      {status === "success" && (
        <Avatar
          src={fileUrl}
          fallBack="Im"
          className="rounded border-stone-200"
        />
      )}
      <div className="flex gap-2 items-center">
        <Button onClick={uploadImage} className={cn(baseClass, className)}>
          {status !== "idle" ? status : children}
        </Button>
        <Button onClick={reset} variant="secondary">
          Cancel
        </Button>
      </div>
    </div>
  );
};

UploaderButton.displayName = "UploaderButton";

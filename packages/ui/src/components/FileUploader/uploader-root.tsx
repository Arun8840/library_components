import React, { createContext, useContext } from "react";
import { UploaderRootProps, UserUploaderHookTypes } from "./uploader-types";
import { useFileUploader } from "./hook/use-fileUploader";
import { cn } from "../../lib/utils";

const baseClass =
  "flex flex-col gap-2 w-full border border-stone-300/40 p-3 rounded-xl";

// Create the Dialog context
export const UploaderContext = createContext<UserUploaderHookTypes | null>(
  null
);

// Custom hook to use the Dialog context
export function useUploaderContext() {
  const context = useContext(UploaderContext);
  if (!context) {
    throw new Error("useUploaderContext must be used within a DialogRoot");
  }
  return context;
}

const UploaderRoot: React.FC<UploaderRootProps> = ({
  children,
  className,
  accept,
  disabled,
  maxSizeMB,
  multiple,
  onUploadFile,
}) => {
  // Wrap onUploadFile to accept File | null, as required by useFileUploader
  const handleUploadFile = (file: File | null) => {
    if (file && onUploadFile) {
      onUploadFile(file);
    }
  };
  const file = useFileUploader(handleUploadFile, accept);
  return (
    <UploaderContext.Provider value={file}>
      <div className={cn(baseClass, className)}>{children}</div>
    </UploaderContext.Provider>
  );
};

export default UploaderRoot;

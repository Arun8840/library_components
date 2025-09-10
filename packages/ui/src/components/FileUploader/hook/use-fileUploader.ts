import { useState, useCallback } from "react";
import { UploadingState, UserUploaderHookTypes } from "../uploader-types";

export function useFileUploader(
  onUploadFile?: (e: File | null) => void,
  accept?: string
): UserUploaderHookTypes {
  const [file, setFileState] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadingState>("idle");
  const [progress, setProgress] = useState(0);

  const setFile = useCallback((file: File | null) => {
    setFileState(file);
    setProgress(0);
    setStatus("idle");
  }, []);

  const uploadImage = () => {
    if (!file) return;

    setStatus("uploading");
    setProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus("success");
          return 100;
        }
        return prev + 10; // Increase by 10% every 300ms
      });
    }, 300);
    onUploadFile?.(file);
  };

  const reset = () => {
    setStatus("idle");
    setFileState(null);
  };
  // Add an onFileChange event handler that accepts an event and sets the file
  const onFileChange = useCallback((value: File | null) => setFile(value), []);

  return {
    file,
    progress,
    status,
    onFileChange,
    uploadImage,
    reset,
    accept,
  };
}

import { useCallback } from "react";

export function useFileSizeConverter() {
  const formatFileSize = useCallback((bytes: number): string => {
    if (bytes >= 1024 * 1024) {
      return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    } else if (bytes >= 1024) {
      return (bytes / 1024).toFixed(2) + " KB";
    } else {
      return bytes + " bytes";
    }
  }, []);

  return { formatFileSize };
}

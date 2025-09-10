export interface UploaderRootProps {
  children: React.ReactNode;
  className?: string;
  multiple?: boolean;
  accept?: string;
  disabled?: boolean;
  onUploadFile?: (files: File) => void;
  maxSizeMB?: number;
}
export type UploadingState = "idle" | "uploading" | "success" | "error";

export interface UserUploaderHookTypes {
  file: File | null;
  progress: number | null;
  status: UploadingState;
  onFileChange: (e: File | null) => void;
  uploadImage: () => void;
  reset: () => void;
  accept?: string;
}
export interface UploaderActionProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  // You can add custom props here if needed
}
export interface UploaderProgressProps
  extends React.ProgressHTMLAttributes<HTMLProgressElement> {
  label?: string;
  className?: string;
}

export interface UploaderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

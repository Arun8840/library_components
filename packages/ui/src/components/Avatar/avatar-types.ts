import React from "react";

export interface AvatarProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  fallBack?: string;
  src?: string | null;
  disabled?: boolean;
}

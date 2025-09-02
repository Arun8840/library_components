"use client";
import React from "react";
import { NavLogoProps } from "./nav-types";
import { Avatar } from "../Avatar";

export const NavLogo: React.FC<NavLogoProps> = ({
  src,
  className,
  fallBack,
  ...props
}) => {
  return <Avatar fallBack={fallBack} src={src} {...props} />;
};

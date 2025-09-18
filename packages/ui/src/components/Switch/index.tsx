"use client";
import React from "react";
import { SwitchProps } from "./switch-types";

export const Switch: React.FC<SwitchProps> = (
  className,
  onChange,
  ...otherProps
) => {
  const [status, setStatus] = React.useState<boolean>(false);

  const focusId = `switch-action-${Math.random().toString(36).slice(2, 10)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e?.target?.checked;
    setStatus(checked);
    onChange?.(checked);
  };
  return (
    <label
      htmlFor={focusId}
      aria-checked={status}
      className="bg-[var(--input)] w-9 inline-block rounded-full p-0.5 group has-checked:bg-[var(--primary)] transition-colors duration-150"
    >
      <input
        type="checkbox"
        onChange={handleChange}
        id={focusId}
        className="sr-only"
        aria-label="Switch"
        {...otherProps}
      />

      {/* //* pointer */}
      <div
        className={`size-4 bg-white rounded-full transition-transform duration-200 group-aria-[checked=true]:translate-x-4`}
      />
    </label>
  );
};

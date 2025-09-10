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
      className="border bg-white border-stone-200 w-11 inline-block rounded-full p-0.5 group"
    >
      <input
        type="checkbox"
        onChange={handleChange}
        id={focusId}
        {...otherProps}
        hidden
      />

      {/* //* pointer */}
      <div
        className={`size-4 bg-stone-400 group-aria-[checked=true]:bg-green-600 rounded-full transition-transform duration-200 group-aria-[checked=true]:translate-x-5.5`}
      />
    </label>
  );
};

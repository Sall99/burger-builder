import { FC } from "react";
import clsx from "clsx";
import { ButtonProps } from "@types";

export const Button: FC<ButtonProps> = ({
  label,
  className = "",
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "border-0 text-white bg-primary-200 hover:bg-primary-600 rounded-xs text-xs focus:outline-none hover:cursor-pointer",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

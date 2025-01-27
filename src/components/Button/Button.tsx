import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./types";

export function Button({
  variant,
  children,
  icon,
  onClick,
  buttonClassName,
  textButtonClassName,
  ...rest
}: ButtonProps) {
  return (
    <>
      {variant === "icon-button" && (
        <button
          className={twMerge(
            "text-blue-500 font-semibold flex items-center justify-between gap-2 p-0 hover:opacity-90",
            buttonClassName
          )}
          onClick={onClick}
          {...rest}
        >
          {icon}
          <span className={twMerge("font-semibold", textButtonClassName)}>
            {children}
          </span>
        </button>
      )}

      {variant === "default-button" && (
        <button
          className={twMerge(
            "font-semibold text-sm py-2 px-4 rounded-3xl hover:opacity-90",
            buttonClassName
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}

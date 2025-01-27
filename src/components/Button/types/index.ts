import { ButtonHTMLAttributes, ReactNode } from "react";

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  buttonClassName?: string;
  textButtonClassName?: string;
};

type DefaultButtonProps = BaseButtonProps & {
  variant: "default-button";
  icon?: never;
};

type IconButtonProps = BaseButtonProps & {
  variant: "icon-button";
  icon: ReactNode;
};

export type ButtonProps = DefaultButtonProps | IconButtonProps;

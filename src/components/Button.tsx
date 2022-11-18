import { cx } from "@emotion/css";
import React from "react";

interface BaseButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<React.ButtonHTMLAttributes<any> & BaseButtonProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <button  {...otherProps} className={cx(
      "px-3 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md shadow-lg shadow-blue-500/50 focus:outline-none",
      otherProps?.className
    )}>
      {children}
    </button>
  )
};

export default Button;

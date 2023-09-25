import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type PropTypes = {
  type?: "text" | "password" | "date";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  [x: string]: any;
};

const InputGray = forwardRef<HTMLInputElement, PropTypes>(
  ({ type, value, onChange, className, ...rest }, ref) => {
    return (
      <input
        type={type || "text"}
        className={twMerge(
          "px-2 py-1 border border-black bg-gray-500/20",
          className
        )}
        value={value}
        onChange={onChange}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default InputGray;

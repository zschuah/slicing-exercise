import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type PropTypes = {
  children?: React.ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  [x: string]: any;
};

const SelectGray = forwardRef<HTMLSelectElement, PropTypes>(
  ({ children, value, onChange, className, ...rest }: PropTypes, ref) => {
    return (
      <select
        value={value}
        onChange={onChange}
        className={twMerge(
          "flex-1 px-2 py-1 border border-black bg-gray-500/20",
          "italic disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </select>
    );
  }
);

export default SelectGray;

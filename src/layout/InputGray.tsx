import { forwardRef } from "react";

type PropTypes = {
  type?: "text" | "password";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
};

const InputGray = forwardRef<HTMLInputElement, PropTypes>(
  ({ type, value, onChange, ...rest }, ref) => {
    return (
      <input
        type={type || "text"}
        className="flex-1 px-2 py-1 border border-black bg-gray-500/20"
        value={value}
        onChange={onChange}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default InputGray;

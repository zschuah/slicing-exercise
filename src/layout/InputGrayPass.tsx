import { forwardRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import InputGray from "./InputGray";

type PropTypes = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
};

const InputGrayPass = forwardRef<HTMLInputElement, PropTypes>(
  ({ value, onChange, ...rest }, ref) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
      <>
        <InputGray
          type={isShowPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          ref={ref}
          {...rest}
        />

        {isShowPassword ? (
          <AiOutlineEyeInvisible
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setIsShowPassword(!isShowPassword)}
          />
        ) : (
          <AiOutlineEye
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setIsShowPassword(!isShowPassword)}
          />
        )}
      </>
    );
  }
);

export default InputGrayPass;

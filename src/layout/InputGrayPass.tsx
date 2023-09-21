import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import InputGray from "./InputGray";

type PropTypes = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
};

const InputGrayPass = ({ value, onChange, ...rest }: PropTypes) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      <InputGray
        type={isShowPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
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
};

export default InputGrayPass;

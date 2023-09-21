type PropTypes = {
  type?: "text" | "password";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
};

const InputGray = ({ type, value, onChange, ...rest }: PropTypes) => {
  return (
    <input
      type={type || "text"}
      className="flex-1 px-2 py-1 border border-black bg-gray-500/20"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default InputGray;

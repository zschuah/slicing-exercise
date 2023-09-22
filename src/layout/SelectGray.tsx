type PropTypes = {
  children?: React.ReactNode;
  value?: string;
  onChange?: () => (event: React.ChangeEvent<HTMLSelectElement>) => void;
  [x: string]: any;
};

const SelectGray = ({ children, value, onChange }: PropTypes) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="flex-1 px-2 py-1 border border-black bg-gray-500/20"
    >
      {children}
    </select>
  );
};

export default SelectGray;

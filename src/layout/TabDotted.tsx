import { twMerge } from "tailwind-merge";

type PropTypes = {
  children: React.ReactNode;
  value: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabDotted = ({ children, value, activeTab, setActiveTab }: PropTypes) => {
  return (
    <li
      className={twMerge(
        "border-b border-black border-dashed py-1",
        value === activeTab && "font-bold border-solid border-b-4",
        "cursor-pointer hover:bg-slate-500/50"
      )}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </li>
  );
};

export default TabDotted;

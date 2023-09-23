import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type PropTypes = {
  children: React.ReactNode;
  to: string;
};

const TabDotted = ({ children, to }: PropTypes) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        twMerge(
          "block border-b border-black border-dashed py-1",
          isActive && "font-bold border-solid border-b-4",
          "cursor-pointer hover:bg-slate-500/50"
        )
      }
    >
      {children}
    </NavLink>
  );
};

export default TabDotted;

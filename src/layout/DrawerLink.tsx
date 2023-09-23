import { Link } from "react-router-dom";

type PropTypes = {
  children: React.ReactNode;
  to: string;
};

const DrawerLink = ({ children, to }: PropTypes) => {
  return (
    <Link to={to} className="block p-4 hover:bg-slate-200 active:bg-slate-300">
      {children}
    </Link>
  );
};

export default DrawerLink;

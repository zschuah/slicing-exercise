import { Link } from "react-router-dom";

type PropTypes = {
  children: React.ReactNode;
  to: string;
};

const NavbarLink = ({ children, to }: PropTypes) => {
  return (
    <Link to={to} className="block p-4 hover:bg-slate-300 active:bg-slate-400">
      {children}
    </Link>
  );
};

export default NavbarLink;

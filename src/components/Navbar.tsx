import { twMerge } from "tailwind-merge";
import NavbarLink from "../layout/NavbarLink";

type PropTypes = {
  isShowNav: boolean;
  setIsShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isShowNav, setIsShowNav }: PropTypes) => {
  return (
    <section
      className={twMerge(
        "absolute inset-0 flex",
        !isShowNav && "translate-x-full",
        "transition duration-500"
      )}
    >
      <div className="flex-1" onClick={() => setIsShowNav(false)}></div>
      <nav className="bg-slate-200 w-80">
        <ul className="mt-0" onClick={() => setIsShowNav(false)}>
          <li>
            <NavbarLink to="/contacts">My Contacts</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/">My Profile</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/">Edit Profile</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/">Logout</NavbarLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

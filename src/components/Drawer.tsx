import { twMerge } from "tailwind-merge";
import DrawerLink from "../layout/DrawerLink";

type PropTypes = {
  isShowNav: boolean;
  setIsShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer = ({ isShowNav, setIsShowNav }: PropTypes) => {
  return (
    <section
      className={twMerge(
        "absolute inset-0 flex",
        !isShowNav && "translate-x-full",
        "transition"
      )}
    >
      <div className="flex-1" onClick={() => setIsShowNav(false)}></div>

      <nav className="bg-slate-100 w-80 shadow-2xl">
        <ul className="mt-0" onClick={() => setIsShowNav(false)}>
          <li>
            <DrawerLink to="/contacts">My Contacts</DrawerLink>
          </li>
          <li>
            <DrawerLink to="/">My Profile</DrawerLink>
          </li>
          <li>
            <DrawerLink to="/">Edit Profile</DrawerLink>
          </li>
          <li>
            <DrawerLink to="/">Logout</DrawerLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Drawer;

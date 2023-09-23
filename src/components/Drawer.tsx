import { twMerge } from "tailwind-merge";
import DrawerLink from "../layout/DrawerLink";

type PropTypes = {
  isShowNav: boolean;
  setIsShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer = ({ isShowNav, setIsShowNav }: PropTypes) => {
  return (
    <>
      <div
        className={twMerge(
          "absolute inset-0 z-20",
          isShowNav && "animate-show-overlay",
          !isShowNav && "animate-hide-overlay",
          "bg-slate-500"
        )}
        onClick={() => setIsShowNav(false)}
      ></div>

      <nav
        className={twMerge(
          "absolute right-0 w-80 h-full z-30",
          !isShowNav && "translate-x-full",
          "transition duration-500",
          "bg-slate-100 shadow-2xl"
        )}
      >
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
    </>
  );
};

export default Drawer;

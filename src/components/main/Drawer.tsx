import { twMerge } from "tailwind-merge";
import { useAuthContext } from "../../context/AuthContext";
import DrawerLink from "../../layout/DrawerLink";

type PropTypes = {
  isShowNav: boolean;
  setIsShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer = ({ isShowNav, setIsShowNav }: PropTypes) => {
  const { setIsAuth } = useAuthContext();

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
          "absolute right-0 h-full z-30",
          "w-40 sm:w-80",
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
            <DrawerLink to="/profile">My Profile</DrawerLink>
          </li>
          <li>
            <DrawerLink to="/profile/basic/edit">Edit Profile</DrawerLink>
          </li>
          <li onClick={() => setIsAuth(false)}>
            <DrawerLink to="/">Logout</DrawerLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Drawer;

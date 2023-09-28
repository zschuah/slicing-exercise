import { GiHamburgerMenu } from "react-icons/gi";
import { twMerge } from "tailwind-merge";
import { useAuthContext } from "../../context/AuthContext";

type PropTypes = {
  setIsShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setIsShowNav }: PropTypes) => {
  const { isAuth } = useAuthContext();

  return (
    <header className="max-w-7xl relative mx-auto">
      <span className="absolute top-4 left-4 px-8 py-1 border border-black z-10">
        LOGO
      </span>
      {isAuth && (
        <GiHamburgerMenu
          className={twMerge(
            "absolute top-4 right-8 xl:right-4 text-4xl cursor-pointer z-10",
            "hover:opacity-50"
          )}
          onClick={() => setIsShowNav(true)}
        />
      )}
    </header>
  );
};

export default Header;

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

type PropTypes = {
  setIsShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setIsShowNav }: PropTypes) => {
  const { isAuth } = useAuthContext();

  return (
    <header className="max-w-7xl relative mx-auto">
      <Link
        to="/"
        className="absolute top-4 left-4 px-8 py-1 border border-black z-10 hover:opacity-50"
      >
        LOGO
      </Link>
      {isAuth && (
        <GiHamburgerMenu
          className="absolute top-4 right-8 xl:right-4 text-4xl cursor-pointer z-10 hover:opacity-50"
          onClick={() => setIsShowNav(true)}
        />
      )}
    </header>
  );
};

export default Header;

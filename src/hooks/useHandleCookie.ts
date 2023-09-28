import { add } from "date-fns";
import { useCookies } from "react-cookie";
import { UserType } from "./useCreateUser";

const useHandleCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["myapp"]);

  const handleSetCookie = (user: UserType) => {
    setCookie(
      "myapp",
      { userId: user.userId },
      {
        expires: add(new Date(), { years: 1 }),
      }
    );
  };

  return { cookies, handleSetCookie, removeCookie };
};

export default useHandleCookie;

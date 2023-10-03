import { add } from "date-fns";
import { useCookies } from "react-cookie";
import { ProfileType } from "../context/ProfileContext";
import { UserType } from "./useCreateUser";

const useHandleCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["myapp"]);

  const handleSetCookie = (user: UserType, profile: ProfileType) => {
    setCookie(
      "myapp",
      { userId: user.userId, profile },
      {
        expires: add(new Date(), { years: 1 }),
      }
    );
  };

  return { cookies, handleSetCookie, removeCookie };
};

export default useHandleCookie;

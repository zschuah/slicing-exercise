import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useProfileContext } from "../context/ProfileContext";
import { UserType } from "./useCreateUser";
import useHandleCookie from "./useHandleCookie";

const useLoginUser = (
  setIsShowError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { setIsAuth, setUserId } = useAuthContext();
  const navigate = useNavigate();
  const { handleSetCookie } = useHandleCookie();

  const { setProfile } = useProfileContext();

  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: async (user: UserType) => {
      console.log(user);
      const res = await axios.get(
        `https://ng-complete-guide-e9c43.firebaseio.com/myapp/users/${user.userId}.json`
      );
      console.log(res.data);

      const isMatch = bcrypt.compareSync(user.password, res.data.password);
      console.log(isMatch);

      if (res.data === null) {
        throw new Error("No user found");
      } else if (!isMatch) {
        throw new Error("Password does not match");
      }

      return { user, data: res.data };
    },
    onSuccess: ({ user, data }) => {
      console.log("LOGIN SUCCESSFUL!");
      setIsShowError(false);
      if (user.isKeepLogged) {
        handleSetCookie(user);
      }
      setProfile(data.profile);
      setIsAuth(true);
      setUserId(user.userId);
      navigate("/contacts");
    },
    onError: () => {
      console.log("LOGIN FAILED!");
      setIsShowError(true);
    },
  });

  return { loginUser, isLoading };
};

export default useLoginUser;

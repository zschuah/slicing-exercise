import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useProfileContext } from "../context/ProfileContext";
import { generateUrlProfile } from "../utils/constants";
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
      const res = await axios.get(generateUrlProfile(user.userId));
      const isMatch = bcrypt.compareSync(user.password, res.data.password);

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
        handleSetCookie(user, data.profile);
      }

      setIsAuth(true);
      setUserId(user.userId);
      setProfile(data.profile);

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

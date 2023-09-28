import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ProfileType } from "../context/ProfileContext";
import { useAuthContext } from "../context/AuthContext";

const useUpdateUser = () => {
  const { userId } = useAuthContext();

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: async (profile: ProfileType) => {
      return axios.patch(
        `https://ng-complete-guide-e9c43.firebaseio.com/myapp/users/${userId}.json`,
        { profile }
      );
    },
    onSuccess: () => {
      console.log("UPDATE SUCCESSFUL!");
    },
  });

  return { updateUser, isLoading };
};

export default useUpdateUser;

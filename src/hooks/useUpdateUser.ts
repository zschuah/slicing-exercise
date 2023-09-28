import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { ProfileType } from "../context/ProfileContext";
import { generateUrlProfile } from "../utils/constants";

const useUpdateUser = () => {
  const { userId } = useAuthContext();
  const navigate = useNavigate();

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: async (profile: ProfileType) => {
      return axios.patch(generateUrlProfile(userId), { profile });
    },
    onSuccess: () => {
      console.log("UPDATE SUCCESSFUL!");
      navigate("..", { relative: "path" });
    },
  });

  return { updateUser, isLoading };
};

export default useUpdateUser;

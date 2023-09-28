import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export type UserType = {
  userId: string;
  password: string;
  isKeepLogged?: boolean;
};

const useCreateUser = () => {
  const { setIsAuth, setUserId } = useAuthContext();
  const navigate = useNavigate();

  const { mutate: createUser, isLoading } = useMutation({
    mutationFn: async (user: UserType) => {
      const res = await axios.put(
        `https://ng-complete-guide-e9c43.firebaseio.com/myapp/users/${user.userId}.json`,
        {
          password: user.password,
          profile: {
            salutation: "",
            firstName: "",
            lastName: "",
            emailAddress: "",
            mobileNumber: "",
            homeAddress: "",
            country: "",
            postalCode: "",
            nationality: "",
            dateOfBirth: "",
            gender: "",
            maritalStatus: "",
            spouseSalutation: "",
            spouseFirstName: "",
            spouseLastName: "",
            hobbies: "",
            sports: "",
            music: "",
            movies: "",
          },
        }
      );

      return { user, data: res.data };
    },
    onSuccess: ({ user }) => {
      console.log("REGISTRATION SUCCESSFUL!");
      setIsAuth(true);
      setUserId(user.userId);
      navigate("/contacts");
    },
  });

  return { createUser, isLoading };
};

export default useCreateUser;

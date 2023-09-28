import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export type UserType = {
  userId: string;
  password: string;
  isKeepLogged?: boolean;
};

const useCreateUser = () => {
  const { mutate: createUser, isLoading } = useMutation({
    mutationFn: async (user: UserType) => {
      return axios.put(
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
    },
    onSuccess: () => {
      console.log("REGISTRATION SUCCESSFUL!");
    },
  });

  return { createUser, isLoading };
};

export default useCreateUser;

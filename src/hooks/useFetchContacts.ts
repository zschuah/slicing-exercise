import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL_CONTACTS } from "../utils/constants";

export type Contact = {
  image: string;
  name: string;
  email: string;
  mobile: string;
  home: string;
  gender: string;
  country: string;
};

const useFetchContacts = () => {
  const { data, isLoading, isError } = useQuery<Contact[], Error>({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axios.get(URL_CONTACTS);
      const formattedContacts = res.data.results.map((result: any) => {
        return {
          image: result?.picture?.large,
          name: `${result?.name?.first} ${result?.name?.last}`,
          email: result?.email,
          mobile: result?.cell,
          home: `${result?.location?.street?.number} ${result?.location?.street?.name}`,
          gender: result?.gender,
          country: result?.location?.country,
        };
      });

      //DELAY - To test loading functionality
      // await new Promise((resolve) => setTimeout(resolve, 5000));

      return formattedContacts;
    },
  });

  return { data, isLoading, isError };
};

export default useFetchContacts;

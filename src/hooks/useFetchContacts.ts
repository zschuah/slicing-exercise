import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL_CONTACTS } from "../utils/constants";

export type ContactType = {
  image: string;
  name: string;
  email: string;
  mobile: string;
  home: string;
  gender: string;
  country: string;
};

const useFetchContacts = () => {
  const { data, isLoading, isError } = useQuery<ContactType[], Error>({
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

    //cacheTime default 5mins - 300_000
    //staleTime should be lower than cacheTime
    staleTime: 60_000,
  });

  return { data, isLoading, isError };
};

export default useFetchContacts;

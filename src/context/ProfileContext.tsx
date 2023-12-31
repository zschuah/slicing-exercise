import { ReactNode, createContext, useContext, useState } from "react";

export type ProfileType = {
  salutation: "Mr." | "Ms." | "Mrs." | "";
  firstName: string;
  lastName: string;
  emailAddress: string;
  mobileNumber: string;
  homeAddress: string;
  country: string;
  postalCode: string;
  nationality: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "";
  maritalStatus: "Single" | "Married" | "";
  spouseSalutation: "Mr." | "Ms." | "Mrs." | "";
  spouseFirstName: string;
  spouseLastName: string;
  hobbies: string;
  sports: string;
  music: string;
  movies: string;
};

type ProfileContextType = {
  profile: ProfileType;
  setProfile: React.Dispatch<React.SetStateAction<ProfileType>>;
};
const ProfileContext = createContext<ProfileContextType>(null!);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<ProfileType>({
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
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  return useContext(ProfileContext);
};

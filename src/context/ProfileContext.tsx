import { ReactNode, createContext, useContext, useState } from "react";

type Profile = {
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
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
};
const ProfileContext = createContext<ProfileContextType>(null!);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Profile>({
    salutation: "Mr.",
    firstName: "John",
    lastName: "Doe",
    emailAddress: "email@email.com",
    mobileNumber: "mobile",
    homeAddress: "home",
    country: "country",
    postalCode: "123123",
    nationality: "nationality",
    dateOfBirth: "2020-10-10",
    gender: "Male",
    maritalStatus: "Single",
    spouseSalutation: "Mrs.",
    spouseFirstName: "Jane",
    spouseLastName: "Doe",
    hobbies: "hobbies",
    sports: "sports",
    music: "music",
    movies: "movies",
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
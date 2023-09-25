import { Outlet } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";
import ProfileTabs from "../components/ProfileTabs";
import { ProfileType, useProfileContext } from "../context/ProfileContext";

export type ProfileOutletContext = {
  profile: ProfileType;
  handleFormSubmit: (data: Partial<ProfileType>) => void;
};

const Profile = () => {
  const { profile, setProfile } = useProfileContext();

  const handleFormSubmit = (data: Partial<ProfileType>) => {
    console.log(data);
    const newProfile: ProfileType = { ...profile, ...data };
    setProfile(newProfile);
  };

  return (
    <div className="h-screen bg-bubbles--blue overflow-auto">
      <section className="mt-20 max-w-7xl mx-auto px-4">
        <div className="flex items-start">
          <ProfileTabs />

          <section className="flex-1">
            <ProfileHeader />
            <Outlet context={{ profile, handleFormSubmit }} />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Profile;

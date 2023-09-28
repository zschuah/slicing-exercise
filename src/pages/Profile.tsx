import { Outlet, useNavigate } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileAside from "../components/profile/ProfileAside";
import { ProfileType, useProfileContext } from "../context/ProfileContext";
import useUpdateUser from "../hooks/useUpdateUser";

export type ProfileOutletContext = {
  profile: ProfileType;
  handleFormSubmit: (data: Partial<ProfileType>) => void;
  handleCancel: () => void;
};

const Profile = () => {
  const navigate = useNavigate();
  const { profile, setProfile } = useProfileContext();
  const { updateUser } = useUpdateUser();

  const handleFormSubmit = (data: Partial<ProfileType>) => {
    console.log(data);
    const newProfile: ProfileType = { ...profile, ...data };
    setProfile(newProfile);
    updateUser(newProfile);
    navigate("..", { relative: "path" });
  };

  const handleCancel = () => {
    navigate("..", { relative: "path" });
  };

  return (
    <div className="h-screen bg-bubbles--blue overflow-auto">
      <section className="mt-20 max-w-7xl mx-auto px-4">
        <div className="flex items-start">
          <ProfileAside />

          <section className="flex-1">
            <ProfileHeader />
            <Outlet context={{ profile, handleFormSubmit, handleCancel }} />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Profile;

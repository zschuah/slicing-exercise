import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ProfileAside from "../components/profile/ProfileAside";
import ProfileHeader from "../components/profile/ProfileHeader";
import { ProfileType, useProfileContext } from "../context/ProfileContext";
import useUpdateUser from "../hooks/useUpdateUser";

export type ProfileOutletContext = {
  profile: ProfileType;
  handleFormSubmit: (data: Partial<ProfileType>) => void;
  handleCancel: () => void;
  dpUrl: string;
  handleDpChange: (files: FileList | null) => void;
  isLoading: boolean;
};

const Profile = () => {
  const navigate = useNavigate();
  const { profile, setProfile } = useProfileContext();
  const { updateUser, isLoading } = useUpdateUser();
  const [dpUrl, setDpUrl] = useState<string>();

  const handleFormSubmit = (data: Partial<ProfileType>) => {
    const newProfile: ProfileType = { ...profile, ...data };
    setProfile(newProfile);
    updateUser(newProfile);
  };

  const handleCancel = () => {
    navigate("..", { relative: "path" });
  };

  const handleDpChange = (files: FileList | null) => {
    if (files) {
      const image = files[0];

      // CONVERTS TO BLOB TO SAVE TO DATABASE
      // const reader = new FileReader();
      // reader.readAsDataURL(image);
      // reader.onload = () => console.log(reader.result);

      const imageURL = URL.createObjectURL(image);
      setDpUrl(imageURL);
    }
  };

  return (
    <div className="h-screen bg-bubbles--blue overflow-auto">
      <section className="mt-20 max-w-7xl mx-auto px-4">
        <div className="flex items-start flex-col sm:flex-row">
          <ProfileAside />

          <section className="flex-1 mt-10 sm:mt-0 w-full">
            <ProfileHeader />
            <Outlet
              context={{
                profile,
                handleFormSubmit,
                handleCancel,
                dpUrl,
                handleDpChange,
                isLoading,
              }}
            />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Profile;

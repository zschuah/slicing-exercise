import { useProfileContext } from "../../context/ProfileContext";

const PersonalPreferences = () => {
  const { profile } = useProfileContext();

  return (
    <div>
      <h3>Personal Preferences</h3>

      <p>{profile.hobbies}</p>
      <p>{profile.sports}</p>
      <p>{profile.music}</p>
      <p>{profile.movies}</p>
    </div>
  );
};

export default PersonalPreferences;

import { useProfileContext } from "../../context/ProfileContext";

const PersonalPreferences = () => {
  const { profile } = useProfileContext();

  return (
    <section className="py-8 space-y-4">
      <div>
        <p className="font-bold">Hobbies and interests</p>
        <p>{profile.hobbies || "-"}</p>
      </div>

      <div>
        <p className="font-bold">Favorite sport(s)</p>
        <p>{profile.sports || "-"}</p>
      </div>

      <div>
        <p className="font-bold">Preferred music genre(s)</p>
        <p>{profile.music || "-"}</p>
      </div>

      <div>
        <p className="font-bold">Preferred movie/TV show(s)</p>
        <p>{profile.movies || "-"}</p>
      </div>
    </section>
  );
};

export default PersonalPreferences;

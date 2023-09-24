import { useProfileContext } from "../../context/ProfileContext";
import InputGray from "../../layout/InputGray";

const PersonalPreferncesEdit = () => {
  const { profile } = useProfileContext();

  return (
    <section className="py-8 space-y-4">
      <div>
        <p className="font-bold">Hobbies and interests</p>
        <InputGray defaultValue={profile.hobbies} />
      </div>

      <div>
        <p className="font-bold">Favorite sport(s)</p>
        <InputGray defaultValue={profile.sports} />
      </div>

      <div>
        <p className="font-bold">Preferred music genre(s)</p>
        <InputGray defaultValue={profile.music} />
      </div>

      <div>
        <p className="font-bold">Preferred movie/TV show(s)</p>
        <InputGray defaultValue={profile.movies} />
      </div>
    </section>
  );
};

export default PersonalPreferncesEdit;

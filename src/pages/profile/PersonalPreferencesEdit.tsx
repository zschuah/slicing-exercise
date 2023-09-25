import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { ProfileType } from "../../context/ProfileContext";
import ButtonBlack from "../../layout/ButtonBlack";
import InputGray from "../../layout/InputGray";
import { ProfileOutletContext } from "../Profile";

type FormValues = Pick<ProfileType, "hobbies" | "sports" | "music" | "movies">;

const PersonalPreferncesEdit = () => {
  const { profile, handleFormSubmit } =
    useOutletContext<ProfileOutletContext>();

  const { register, handleSubmit, reset } = useForm<FormValues>();

  return (
    <form
      className="py-8 space-y-4 w-80"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div>
        <p className="font-bold">Hobbies and interests</p>
        <InputGray
          className="w-full"
          defaultValue={profile.hobbies}
          {...register("hobbies")}
        />
      </div>

      <div>
        <p className="font-bold">Favorite sport(s)</p>
        <InputGray
          className="w-full"
          defaultValue={profile.sports}
          {...register("sports")}
        />
      </div>

      <div>
        <p className="font-bold">Preferred music genre(s)</p>
        <InputGray
          className="w-full"
          defaultValue={profile.music}
          {...register("music")}
        />
      </div>

      <div>
        <p className="font-bold">Preferred movie/TV show(s)</p>
        <InputGray
          className="w-full"
          defaultValue={profile.movies}
          {...register("movies")}
        />
      </div>

      <div className="pt-4">
        <ButtonBlack>Save & Update</ButtonBlack>
        <ButtonBlack
          onClick={() => reset()}
          type="button"
          className="ml-1 px-8"
          variant="outline"
        >
          Cancel
        </ButtonBlack>
      </div>
    </form>
  );
};

export default PersonalPreferncesEdit;

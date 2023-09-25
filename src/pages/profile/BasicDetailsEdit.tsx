import { useForm } from "react-hook-form";
import { IoPersonSharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { Profile, useProfileContext } from "../../context/ProfileContext";
import ButtonBlack from "../../layout/ButtonBlack";
import InputGray from "../../layout/InputGray";
import SelectGray from "../../layout/SelectGray";

type FormValues = Pick<
  Profile,
  "salutation" | "firstName" | "lastName" | "emailAddress"
>;

const BasicDetailsEdit = () => {
  const { profile, setProfile } = useProfileContext();
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitted, errors },
    reset,
  } = useForm<FormValues>({ mode: "onSubmit" });

  const handleFormSubmit = (data: FormValues) => {
    console.log(data);
    const newProfile: Profile = { ...profile, ...data };
    setProfile(newProfile);
  };

  return (
    <div className="p-8 flex gap-8">
      <div className="flex flex-col items-center w-28">
        <IoPersonSharp className="text-8xl mt-4" />
        <div className="text-center">
          <p className="text-sm underline">Upload image</p>
          <p className="text-xs italic">
            (JPG or PNG format with maximum size of 1 MB)
          </p>
        </div>
      </div>

      <form
        className="space-y-4 w-80"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div>
          <p className="font-bold">Salutation*</p>
          <SelectGray
            className={twMerge("w-full", errors.salutation && "border-red-500")}
            defaultValue={profile.salutation}
            {...register("salutation", { required: true })}
          >
            <option value="" disabled hidden>
              Select salutation
            </option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
          </SelectGray>
          {errors.salutation && (
            <small className="italic text-red-500">
              Please select your salutation.
            </small>
          )}
        </div>

        <div>
          <label htmlFor="first-name" className="font-bold block">
            First name*
          </label>
          <InputGray
            className={twMerge("w-full", errors.firstName && "border-red-500")}
            id="first-name"
            defaultValue={profile.firstName}
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <small className="italic text-red-500">
              Please enter your first name.
            </small>
          )}
        </div>

        <div>
          <label htmlFor="last-name" className="font-bold block">
            Last name*
          </label>
          <InputGray
            className={twMerge("w-full", errors.lastName && "border-red-500")}
            id="last-name"
            defaultValue={profile.lastName}
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <small className="italic text-red-500">
              Please enter your last name.
            </small>
          )}
        </div>

        <div>
          <label htmlFor="email-address" className="font-bold block">
            Email address*
          </label>
          <InputGray
            className={twMerge(
              "w-full",
              errors.emailAddress && "border-red-500"
            )}
            id="email-address"
            defaultValue={profile.emailAddress}
            {...register("emailAddress", {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.emailAddress && (
            <small className="italic text-red-500">
              Please enter a valid email.
            </small>
          )}
        </div>

        <div className="pt-4">
          <ButtonBlack disabled={isSubmitted && !isValid}>
            Save & Update
          </ButtonBlack>
          <ButtonBlack
            onClick={() => reset()}
            type="button"
            className="ml-1 px-8"
            variant="outline"
          >
            Cancel
          </ButtonBlack>
        </div>

        <p className="italic text-xs">* Mandatory field</p>
      </form>
    </div>
  );
};

export default BasicDetailsEdit;

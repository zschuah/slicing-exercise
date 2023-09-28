import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoPersonSharp } from "react-icons/io5";
import { useOutletContext } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { ProfileType } from "../../context/ProfileContext";
import ButtonBlack from "../../layout/ButtonBlack";
import InputGray from "../../layout/InputGray";
import SelectGray from "../../layout/SelectGray";
import { ProfileOutletContext } from "../Profile";

type FormValues = Pick<
  ProfileType,
  "salutation" | "firstName" | "lastName" | "emailAddress"
>;

const BasicDetailsEdit = () => {
  const { profile, handleFormSubmit, handleCancel } =
    useOutletContext<ProfileOutletContext>();
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitted, errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const [dpUrl, setDpUrl] = useState<string>();

  const handleDpChange = (files: FileList | null) => {
    if (files) {
      const image = files[0];

      // CONVERTS TO BLOB TO SAVE TO DATABASE
      // const reader = new FileReader();
      // reader.readAsDataURL(image);
      // reader.onload = () => console.log(reader.result);

      const imageURL = URL.createObjectURL(image);
      console.log(imageURL);
      setDpUrl(imageURL);
    }
  };

  return (
    <div className="p-0 sm:p-8 flex gap-8 flex-col sm:flex-row">
      <div className="flex flex-col items-center w-28 mx-auto sm:mx-0">
        {dpUrl ? (
          <img src={dpUrl} alt="dp-url" />
        ) : (
          <IoPersonSharp className="text-8xl mt-4" />
        )}

        <div className="text-center">
          <label
            className="text-sm underline cursor-pointer"
            htmlFor="dp-upload"
          >
            Upload image
          </label>
          <input
            id="dp-upload"
            type="file"
            accept="image/*"
            onChange={(e) => handleDpChange(e.target.files)}
          />
          <p className="text-xs italic">
            (JPG or PNG format with maximum size of 1 MB)
          </p>
        </div>
      </div>

      <form
        className="space-y-4 w-80 pb-8"
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
            onClick={handleCancel}
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

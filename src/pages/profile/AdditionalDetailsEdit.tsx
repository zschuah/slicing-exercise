import { format, sub } from "date-fns";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { useProfileContext } from "../../context/ProfileContext";
import ButtonBlack from "../../layout/ButtonBlack";
import InputGray from "../../layout/InputGray";
import SelectGray from "../../layout/SelectGray";

type FormValues = {
  mobileNumber: string;
  homeAddress: string;
  country: string;
  postalCode: string;
  nationality: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
};

const AdditionalDetailsEdit = () => {
  const { profile } = useProfileContext();
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, isValid, errors },
    reset,
  } = useForm<FormValues>();

  const handleFormSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form
      className="py-8 space-y-4 w-80"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div>
        <p className="font-bold">Mobile number*</p>
        <InputGray
          className={twMerge("w-full", errors.mobileNumber && "border-red-500")}
          defaultValue={profile.mobileNumber}
          {...register("mobileNumber", { required: true })}
        />
        {errors.mobileNumber && (
          <small className="italic text-red-500">
            Please enter your mobile number.
          </small>
        )}
      </div>

      <div>
        <p className="font-bold">Home address*</p>
        <InputGray
          className={twMerge("w-full", errors.homeAddress && "border-red-500")}
          defaultValue={profile.homeAddress}
          {...register("homeAddress", { required: true })}
        />
        {errors.homeAddress && (
          <small className="italic text-red-500">
            Please enter your home address.
          </small>
        )}
      </div>

      <div>
        <p className="font-bold">Country*</p>
        <InputGray
          className={twMerge("w-full", errors.country && "border-red-500")}
          defaultValue={profile.country}
          {...register("country", { required: true })}
        />
        {errors.country && (
          <small className="italic text-red-500">
            Please enter your country.
          </small>
        )}
      </div>

      <div>
        <p className="font-bold">Postal Code*</p>
        <InputGray
          className={twMerge("w-full", errors.postalCode && "border-red-500")}
          defaultValue={profile.postalCode}
          {...register("postalCode", { required: true })}
        />
        {errors.postalCode && (
          <small className="italic text-red-500">
            Please enter your postal code.
          </small>
        )}
      </div>

      <div>
        <p className="font-bold">Nationality*</p>
        <InputGray
          className={twMerge("w-full", errors.nationality && "border-red-500")}
          defaultValue={profile.nationality}
          {...register("nationality", { required: true })}
        />
        {errors.nationality && (
          <small className="italic text-red-500">
            Please enter your nationality.
          </small>
        )}
      </div>

      <div>
        <p className="font-bold">Date of birth</p>
        <InputGray
          type="date"
          max={format(sub(new Date(), { years: 17 }), "yyyy-MM-dd")}
          className="w-full"
          defaultValue={profile.dateOfBirth}
          {...register("dateOfBirth")}
        />
      </div>

      <div>
        <p className="font-bold">Gender</p>
        <SelectGray
          defaultValue={profile.gender}
          className="w-full"
          {...register("gender")}
        >
          <option value="" disabled hidden>
            Select gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </SelectGray>
      </div>

      <div>
        <p className="font-bold">Marital status</p>
        <SelectGray
          defaultValue={profile.maritalStatus}
          className="w-full"
          {...register("maritalStatus")}
        >
          <option value="" disabled hidden>
            Select marital status
          </option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </SelectGray>
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
  );
};

export default AdditionalDetailsEdit;

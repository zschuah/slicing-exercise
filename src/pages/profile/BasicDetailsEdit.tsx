import { useForm } from "react-hook-form";
import { IoPersonSharp } from "react-icons/io5";
import { useProfileContext } from "../../context/ProfileContext";
import ButtonBlack from "../../layout/ButtonBlack";
import InputGray from "../../layout/InputGray";
import SelectGray from "../../layout/SelectGray";

type FormValues = {
  salutation: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
};

const BasicDetailsEdit = () => {
  const { profile } = useProfileContext();

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<FormValues>();

  const handleFormSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="p-8 flex gap-8">
      <IoPersonSharp className="text-7xl mt-4" />

      <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <p className="font-bold">Salutation*</p>
          <SelectGray
            className="w-full"
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
        </div>

        <div>
          <label htmlFor="first-name" className="font-bold block">
            First name*
          </label>
          <InputGray
            className="w-full"
            id="first-name"
            defaultValue={profile.firstName}
            {...register("firstName", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="last-name" className="font-bold block">
            Last name*
          </label>
          <InputGray
            className="w-full"
            id="last-name"
            defaultValue={profile.lastName}
            {...register("lastName", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="email-address" className="font-bold block">
            Email address*
          </label>
          <InputGray
            className="w-full"
            id="email-address"
            defaultValue={profile.emailAddress}
            {...register("emailAddress", { required: true })}
          />
        </div>

        <ButtonBlack disabled={!isDirty || !isValid}>Save & Update</ButtonBlack>
        <ButtonBlack className="ml-1 px-8" variant="outline">
          Cancel
        </ButtonBlack>

        <p className="italic text-xs">* Mandatory field</p>
      </form>
    </div>
  );
};

export default BasicDetailsEdit;

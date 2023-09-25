import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { ProfileType } from "../../context/ProfileContext";
import ButtonBlack from "../../layout/ButtonBlack";
import InputGray from "../../layout/InputGray";
import SelectGray from "../../layout/SelectGray";
import { ProfileOutletContext } from "../Profile";

type FormValues = Pick<
  ProfileType,
  "spouseSalutation" | "spouseFirstName" | "spouseLastName"
>;

const SpouseDetailsEdit = () => {
  const { profile, handleFormSubmit, handleCancel } =
    useOutletContext<ProfileOutletContext>();
  const { register, handleSubmit, reset } = useForm<FormValues>();

  return (
    <form
      className="py-8 space-y-4 w-80"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div>
        <p className="font-bold">Salutation</p>
        <SelectGray
          className="w-full"
          defaultValue={profile.spouseSalutation}
          {...register("spouseSalutation")}
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
        <p className="font-bold">First name</p>
        <InputGray
          className="w-full"
          defaultValue={profile.spouseFirstName}
          {...register("spouseFirstName")}
        />
      </div>

      <div>
        <p className="font-bold">Last name</p>
        <InputGray
          className="w-full"
          defaultValue={profile.spouseLastName}
          {...register("spouseLastName")}
        />
      </div>

      <div className="pt-4">
        <ButtonBlack>Save & Update</ButtonBlack>
        <ButtonBlack
          onClick={handleCancel}
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

export default SpouseDetailsEdit;

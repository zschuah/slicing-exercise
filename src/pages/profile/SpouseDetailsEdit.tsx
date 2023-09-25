import { useForm } from "react-hook-form";
import { Profile, useProfileContext } from "../../context/ProfileContext";
import ButtonBlack from "../../layout/ButtonBlack";
import InputGray from "../../layout/InputGray";
import SelectGray from "../../layout/SelectGray";

type FormValues = Pick<
  Profile,
  "spouseSalutation" | "spouseFirstName" | "spouseLastName"
>;

const SpouseDetailsEdit = () => {
  const { profile } = useProfileContext();
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const handleFormSubmit = (data: FormValues) => {
    console.log(data);
  };

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

export default SpouseDetailsEdit;

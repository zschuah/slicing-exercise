import { useProfileContext } from "../../context/ProfileContext";
import InputGray from "../../layout/InputGray";
import SelectGray from "../../layout/SelectGray";

const SpouseDetailsEdit = () => {
  const { profile } = useProfileContext();

  return (
    <section className="py-8 space-y-4 inline-block">
      <div>
        <p className="font-bold">Salutation</p>
        <SelectGray defaultValue={profile.spouseSalutation} className="w-full">
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
        <InputGray defaultValue={profile.spouseFirstName} />
      </div>

      <div>
        <p className="font-bold">Last name</p>
        <InputGray defaultValue={profile.spouseLastName} />
      </div>
    </section>
  );
};

export default SpouseDetailsEdit;

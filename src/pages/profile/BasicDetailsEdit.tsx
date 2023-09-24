import { IoPersonSharp } from "react-icons/io5";
import { useProfileContext } from "../../context/ProfileContext";
import InputGray from "../../layout/InputGray";
import SelectGray from "../../layout/SelectGray";

const BasicDetailsEdit = () => {
  const { profile } = useProfileContext();

  return (
    <div className="p-8 flex gap-8">
      <IoPersonSharp className="text-7xl mt-4" />

      <div className="space-y-4">
        <div>
          <p className="font-bold">Salutation*</p>
          <SelectGray className="w-full" defaultValue={profile.salutation}>
            <option value="" disabled hidden>
              Select salutation
            </option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
          </SelectGray>
        </div>

        <div>
          <p className="font-bold">First name*</p>
          <InputGray defaultValue={profile.firstName} />
        </div>

        <div>
          <p className="font-bold">Last name*</p>
          <InputGray defaultValue={profile.lastName} />
        </div>

        <div>
          <p className="font-bold">Email address*</p>
          <InputGray defaultValue={profile.emailAddress} />
        </div>
      </div>
    </div>
  );
};

export default BasicDetailsEdit;

import { useProfileContext } from "../../context/ProfileContext";
import InputGray from "../../layout/InputGray";
import SelectGray from "../../layout/SelectGray";

const AdditionalDetailsEdit = () => {
  const { profile } = useProfileContext();

  return (
    <section className="py-8 space-y-4 inline-block">
      <div>
        <p className="font-bold">Mobile number*</p>
        <InputGray defaultValue={profile.mobileNumber} />
      </div>

      <div>
        <p className="font-bold">Home address*</p>
        <InputGray defaultValue={profile.homeAddress} />
      </div>

      <div>
        <p className="font-bold">Country*</p>
        <InputGray defaultValue={profile.country} />
      </div>

      <div>
        <p className="font-bold">Postal Code*</p>
        <InputGray defaultValue={profile.postalCode} />
      </div>

      <div>
        <p className="font-bold">Nationality*</p>
        <InputGray defaultValue={profile.nationality} />
      </div>

      <div>
        <p className="font-bold">Date of birth</p>
        <InputGray defaultValue={profile.dateOfBirth} />
      </div>

      <div>
        <p className="font-bold">Gender</p>
        <SelectGray defaultValue={profile.gender} className="w-full">
          <option value="" disabled hidden>
            Select gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </SelectGray>
      </div>

      <div>
        <p className="font-bold">Marital status</p>
        <SelectGray defaultValue={profile.maritalStatus} className="w-full">
          <option value="" disabled hidden>
            Select marital status
          </option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </SelectGray>
      </div>
    </section>
  );
};

export default AdditionalDetailsEdit;

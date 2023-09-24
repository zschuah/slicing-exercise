import { useProfileContext } from "../../context/ProfileContext";

const AdditionalDetails = () => {
  const { profile } = useProfileContext();

  return (
    <section className="py-8 space-y-4">
      <div>
        <p className="font-bold">Mobile number*</p>
        <p>{profile.mobileNumber}</p>
      </div>

      <div>
        <p className="font-bold">Home address*</p>
        <p>{profile.homeAddress}</p>
      </div>

      <div>
        <p className="font-bold">Country*</p>
        <p>{profile.country}</p>
      </div>

      <div>
        <p className="font-bold">Postal Code*</p>
        <p>{profile.postalCode}</p>
      </div>

      <div>
        <p className="font-bold">Nationality*</p>
        <p>{profile.nationality}</p>
      </div>

      <div>
        <p className="font-bold">Date of birth</p>
        <p>{profile.dateOfBirth}</p>
      </div>

      <div>
        <p className="font-bold">Gender</p>
        <p>{profile.gender}</p>
      </div>

      <div>
        <p className="font-bold">Marital status</p>
        <p>{profile.maritalStatus}</p>
      </div>
    </section>
  );
};

export default AdditionalDetails;

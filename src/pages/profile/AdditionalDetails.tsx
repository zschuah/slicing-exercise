import { useProfileContext } from "../../context/ProfileContext";

const AdditionalDetails = () => {
  const { profile } = useProfileContext();

  return (
    <div>
      <h3>Additional Details</h3>

      <p>{profile.mobileNumber}</p>
      <p>{profile.homeAddress}</p>
      <p>{profile.country}</p>
      <p>{profile.postalCode}</p>
      <p>{profile.nationality}</p>
      <p>{profile.dateOfBirth}</p>
      <p>{profile.gender}</p>
      <p>{profile.maritalStatus}</p>
    </div>
  );
};

export default AdditionalDetails;

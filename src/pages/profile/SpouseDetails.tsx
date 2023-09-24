import { useProfileContext } from "../../context/ProfileContext";

const SpouseDetails = () => {
  const { profile } = useProfileContext();

  return (
    <div>
      <h3>Spouse Details</h3>

      <p>{profile.spouseSalutation}</p>
      <p>{profile.spouseFirstName}</p>
      <p>{profile.spouseLastName}</p>
    </div>
  );
};

export default SpouseDetails;

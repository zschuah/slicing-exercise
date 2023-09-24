import { IoPersonSharp } from "react-icons/io5";
import { useProfileContext } from "../../context/ProfileContext";

const BasicDetails = () => {
  const { profile } = useProfileContext();

  return (
    <div>
      <h3>Basic Details</h3>
      <IoPersonSharp className="text-7xl" />

      <p>{profile.salutation}</p>
      <p>{profile.firstName}</p>
      <p>{profile.lastName}</p>
      <p>{profile.emailAddress}</p>
    </div>
  );
};

export default BasicDetails;

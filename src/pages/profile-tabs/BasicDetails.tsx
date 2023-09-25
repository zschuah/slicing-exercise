import { IoPersonSharp } from "react-icons/io5";
import { useProfileContext } from "../../context/ProfileContext";

const BasicDetails = () => {
  const { profile } = useProfileContext();

  return (
    <section className="p-8 flex gap-8">
      <IoPersonSharp className="text-8xl mt-4" />

      <div className="space-y-4">
        <div>
          <p className="font-bold">Salutation*</p>
          <p>{profile.salutation || "-"}</p>
        </div>

        <div>
          <p className="font-bold">First name*</p>
          <p>{profile.firstName || "-"}</p>
        </div>

        <div>
          <p className="font-bold">Last name*</p>
          <p>{profile.lastName || "-"}</p>
        </div>

        <div>
          <p className="font-bold">Email address*</p>
          <p>{profile.emailAddress || "-"}</p>
        </div>
      </div>
    </section>
  );
};

export default BasicDetails;

import { useProfileContext } from "../../context/ProfileContext";

const SpouseDetails = () => {
  const { profile } = useProfileContext();

  return (
    <section className="py-8 space-y-4">
      <div>
        <p className="font-bold">Salutation</p>
        <p>{profile.spouseSalutation}</p>
      </div>

      <div>
        <p className="font-bold">First name</p>
        <p>{profile.spouseFirstName}</p>
      </div>

      <div>
        <p className="font-bold">Last name</p>
        <p>{profile.spouseLastName}</p>
      </div>
    </section>
  );
};

export default SpouseDetails;

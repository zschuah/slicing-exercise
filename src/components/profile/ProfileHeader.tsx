import { BsChevronLeft } from "react-icons/bs";
import { RiBallPenFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const ProfileHeader = () => {
  const location = useLocation();
  const isEdit = location.pathname.includes("edit");

  return (
    <div className="flex items-end w-full">
      <h2 className="text-3xl sm:text-4xl">
        {isEdit ? <span>Edit </span> : <span>My </span>}
        <span className="font-bold">Profile</span>
      </h2>
      <div className="border-b-4 border-black flex-1 ml-2 mr-6"></div>

      {isEdit ? (
        <>
          <BsChevronLeft className="text-xl" />
          <Link to=".." relative="path" className="underline ml-1">
            Go back to My Profile
          </Link>
        </>
      ) : (
        <>
          <Link to="./edit" relative="path" className="underline mr-1">
            Edit profile
          </Link>
          <RiBallPenFill className="text-xl" />
        </>
      )}
    </div>
  );
};

export default ProfileHeader;

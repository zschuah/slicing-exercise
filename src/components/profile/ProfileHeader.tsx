import { BsChevronLeft } from "react-icons/bs";
import { RiBallPenFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const ProfileHeader = () => {
  const location = useLocation();
  const isEdit = location.pathname.includes("edit");

  return (
    <div className="sm:flex items-end text-right">
      <h2 className="text-3xl sm:text-4xl">
        {isEdit ? <span>Edit </span> : <span>My </span>}
        <span className="font-bold">Profile</span>
      </h2>
      <div className="border-b-4 border-black flex-1 ml-2 mr-6 hidden sm:block"></div>

      {isEdit ? (
        <div className="flex">
          <BsChevronLeft className="text-xl ml-auto" />
          <Link to=".." relative="path" className="underline ml-1">
            Go back to My Profile
          </Link>
        </div>
      ) : (
        <div className="flex">
          <Link to="./edit" relative="path" className="underline mr-1 ml-auto">
            Edit profile
          </Link>
          <RiBallPenFill className="text-xl" />
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;

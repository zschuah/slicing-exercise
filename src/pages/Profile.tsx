import { BsChevronLeft } from "react-icons/bs";
import { RiBallPenFill } from "react-icons/ri";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useProfileContext } from "../context/ProfileContext";
import TabDotted from "../layout/TabDotted";

const Profile = () => {
  const { profile } = useProfileContext();

  const location = useLocation();
  const isEdit = location.pathname.includes("edit");

  const handleUrlEdit = (url: string) => {
    if (isEdit) {
      return url + "/edit";
    }
    return url;
  };

  return (
    <div className="h-screen bg-bubbles--blue overflow-auto">
      <section className="mt-20 max-w-7xl mx-auto px-4">
        <div className="flex items-start">
          <aside className="w-48 mr-10 pt-20">
            <ul className="border-t border-black border-dashed">
              <li>
                <TabDotted to={handleUrlEdit("/profile/basic")}>
                  Basic Details
                </TabDotted>
              </li>
              <li>
                <TabDotted to={handleUrlEdit("/profile/additional")}>
                  Additional Details
                </TabDotted>
              </li>
              {profile.maritalStatus === "Married" && (
                <li>
                  <TabDotted to={handleUrlEdit("/profile/spouse")}>
                    Spouse Details
                  </TabDotted>
                </li>
              )}
              <li>
                <TabDotted to={handleUrlEdit("/profile/personal")}>
                  Personal Preferences
                </TabDotted>
              </li>
            </ul>
          </aside>

          <section className="flex-1">
            <div className="flex items-end">
              <h2 className="text-4xl">
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

            <Outlet />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Profile;

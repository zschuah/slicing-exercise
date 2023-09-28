import { useLocation } from "react-router-dom";
import { useProfileContext } from "../../context/ProfileContext";
import TabDotted from "../../layout/TabDotted";

const ProfileAside = () => {
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
    <aside className="w-full sm:w-48 sm:mr-10 sm:pt-20 text-center sm:text-left">
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
  );
};

export default ProfileAside;

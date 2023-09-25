import { useLocation } from "react-router-dom";
import { useProfileContext } from "../context/ProfileContext";
import TabDotted from "../layout/TabDotted";

const ProfileTabs = () => {
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
  );
};

export default ProfileTabs;

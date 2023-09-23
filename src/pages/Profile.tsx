import TabDotted from "../layout/TabDotted";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="h-screen bg-bubbles--blue overflow-auto">
      <section className="mt-20 max-w-7xl mx-auto px-4">
        <div className="flex items-start">
          <aside className="w-48 mr-10 pt-20">
            <ul className="border-t border-black border-dashed">
              <li>
                <TabDotted to="/profile/basic">Basic Details</TabDotted>
              </li>
              <li>
                <TabDotted to="/profile/additional">
                  Additional Details
                </TabDotted>
              </li>
              <li>
                <TabDotted to="/profile/spouse">Spouse Details</TabDotted>
              </li>
              <li>
                <TabDotted to="/profile/personal">
                  Personal Preferences
                </TabDotted>
              </li>
            </ul>
          </aside>

          <section className="flex-1">
            <div className="flex">
              <h2 className="text-4xl">
                My <span className="font-bold">Profile</span>
              </h2>
              <div className="border-b-4 border-black flex-1 ml-2"></div>
            </div>

            <Outlet />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Profile;

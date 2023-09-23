import { useState } from "react";
import TabDotted from "../layout/TabDotted";

const Profile = () => {
  const [tabList] = useState([
    { name: "Basic Details", value: "basic" },
    { name: "Additional Details", value: "additional" },
    { name: "Spouse Details", value: "spouse" },
    { name: "Personal Preferences", value: "personal" },
  ]);
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="h-screen bg-bubbles--blue overflow-auto">
      <section className="mt-20 max-w-7xl mx-auto px-4">
        <div className="flex items-start">
          <aside className="w-48 mr-10 pt-20">
            <ul className="border-t border-black border-dashed">
              {tabList.map((tab) => (
                <TabDotted
                  value={tab.value}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {tab.name}
                </TabDotted>
              ))}
            </ul>
          </aside>

          <section className="flex-1">
            <div className="flex">
              <h2 className="text-4xl">
                My <span className="font-bold">Profile</span>
              </h2>
              <div className="border-b-4 border-black flex-1 ml-2"></div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
              nobis?
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Profile;

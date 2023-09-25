import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Drawer from "./components/Drawer";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import AdditionalDetails from "./pages/profile/AdditionalDetails";
import AdditionalDetailsEdit from "./pages/profile/AdditionalDetailsEdit";
import BasicDetails from "./pages/profile/BasicDetails";
import BasicDetailsEdit from "./pages/profile/BasicDetailsEdit";
import PersonalPreferences from "./pages/profile/PersonalPreferences";
import PersonalPreferencesEdit from "./pages/profile/PersonalPreferencesEdit";
import SpouseDetails from "./pages/profile/SpouseDetails";
import SpouseDetailsEdit from "./pages/profile/SpouseDetailsEdit";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <section className="max-w-7xl relative mx-auto">
        <Link
          to="/"
          className="absolute top-4 left-4 px-8 py-1 border border-black z-10 hover:opacity-50"
        >
          LOGO
        </Link>
        <GiHamburgerMenu
          className="absolute top-4 right-8 xl:right-4 text-4xl cursor-pointer z-10 hover:opacity-50"
          onClick={() => setIsShowNav(true)}
        />
      </section>

      <Drawer isShowNav={isShowNav} setIsShowNav={setIsShowNav} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/profile"
          element={
            <ProfileProvider>
              <Profile />
            </ProfileProvider>
          }
        >
          <Route index element={<Navigate to="basic" />} />
          <Route path="basic" element={<BasicDetails />} />
          <Route path="basic/edit" element={<BasicDetailsEdit />} />
          <Route path="additional" element={<AdditionalDetails />} />
          <Route path="additional/edit" element={<AdditionalDetailsEdit />} />
          <Route path="spouse" element={<SpouseDetails />} />
          <Route path="spouse/edit" element={<SpouseDetailsEdit />} />
          <Route path="personal" element={<PersonalPreferences />} />
          <Route path="personal/edit" element={<PersonalPreferencesEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

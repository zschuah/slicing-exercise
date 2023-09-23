import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Drawer from "./components/Drawer";
import AdditionalDetails from "./components/profile/AdditionalDetails";
import BasicDetails from "./components/profile/BasicDetails";
import PersonalPreferences from "./components/profile/PersonalPreferences";
import SpouseDetails from "./components/profile/SpouseDetails";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

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
          className="absolute top-4 right-8 lg:right-4 text-3xl cursor-pointer hover:opacity-50"
          onClick={() => setIsShowNav(true)}
        />
      </section>

      <Drawer isShowNav={isShowNav} setIsShowNav={setIsShowNav} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Navigate to="basic" />} />
          <Route path="basic" element={<BasicDetails />} />
          <Route path="additional" element={<AdditionalDetails />} />
          <Route path="spouse" element={<SpouseDetails />} />
          <Route path="personal" element={<PersonalPreferences />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Protected from "./components/main/Protected";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import AdditionalDetails from "./pages/profile-tabs/AdditionalDetails";
import AdditionalDetailsEdit from "./pages/profile-tabs/AdditionalDetailsEdit";
import BasicDetails from "./pages/profile-tabs/BasicDetails";
import BasicDetailsEdit from "./pages/profile-tabs/BasicDetailsEdit";
import PersonalPreferences from "./pages/profile-tabs/PersonalPreferences";
import PersonalPreferencesEdit from "./pages/profile-tabs/PersonalPreferencesEdit";
import SpouseDetails from "./pages/profile-tabs/SpouseDetails";
import SpouseDetailsEdit from "./pages/profile-tabs/SpouseDetailsEdit";
import { ProfileProvider } from "./context/ProfileContext";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/contacts"
        element={
          <Protected>
            <Contacts />
          </Protected>
        }
      />
      <Route
        path="/profile"
        element={
          <Protected>
            <ProfileProvider>
              <Profile />
            </ProfileProvider>
          </Protected>
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
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;

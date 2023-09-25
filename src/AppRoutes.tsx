import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAuthContext } from "./context/AuthContext";
import { ProfileProvider } from "./context/ProfileContext";
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

const AppRoutes = () => {
  const { isAuth } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/contacts"
        element={isAuth ? <Contacts /> : <Navigate to="/" />}
      />
      <Route
        path="/profile"
        element={
          isAuth ? (
            <ProfileProvider>
              <Profile />
            </ProfileProvider>
          ) : (
            <Navigate to="/" />
          )
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

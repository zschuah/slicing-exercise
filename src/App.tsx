import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Drawer from "./components/main/Drawer";
import Header from "./components/main/Header";
import { useAuthContext } from "./context/AuthContext";
import { useProfileContext } from "./context/ProfileContext";
import useHandleCookie from "./hooks/useHandleCookie";

function App() {
  const navigate = useNavigate();
  const [isShowNav, setIsShowNav] = useState(false);

  const { cookies } = useHandleCookie();
  const { setIsAuth, setUserId } = useAuthContext();
  const { setProfile } = useProfileContext();

  useEffect(() => {
    if (cookies.myapp) {
      setIsAuth(true);
      setUserId(cookies.myapp.userId);
      setProfile(cookies.myapp.profile);

      navigate("/contacts");
    }
  }, []);

  return (
    <main className="relative overflow-hidden">
      <Header setIsShowNav={setIsShowNav} />
      <Drawer isShowNav={isShowNav} setIsShowNav={setIsShowNav} />
      <AppRoutes />
    </main>
  );
}

export default App;

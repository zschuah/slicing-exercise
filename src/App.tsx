import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Drawer from "./components/main/Drawer";
import Header from "./components/main/Header";
import { useAuthContext } from "./context/AuthContext";
import { ProfileProvider } from "./context/ProfileContext";
import useHandleCookie from "./hooks/useHandleCookie";

function App() {
  const navigate = useNavigate();
  const [isShowNav, setIsShowNav] = useState(false);

  const { cookies } = useHandleCookie();
  const { setIsAuth } = useAuthContext();

  useEffect(() => {
    if (cookies.myapp) {
      setIsAuth(true);
      navigate("/contacts");
    }
  }, []);

  return (
    <main className="relative overflow-hidden">
      <ProfileProvider>
        <Header setIsShowNav={setIsShowNav} />
        <Drawer isShowNav={isShowNav} setIsShowNav={setIsShowNav} />
        <AppRoutes />
      </ProfileProvider>
    </main>
  );
}

export default App;

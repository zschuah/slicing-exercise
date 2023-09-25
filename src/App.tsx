import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <Header setIsShowNav={setIsShowNav} />
      <Drawer isShowNav={isShowNav} setIsShowNav={setIsShowNav} />
      <AppRoutes />
    </div>
  );
}

export default App;

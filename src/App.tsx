import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Drawer from "./components/main/Drawer";
import Header from "./components/main/Header";

function App() {
  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <main className="relative overflow-hidden">
      <Header setIsShowNav={setIsShowNav} />
      <Drawer isShowNav={isShowNav} setIsShowNav={setIsShowNav} />
      <AppRoutes />
    </main>
  );
}

export default App;

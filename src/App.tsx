import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <section className="max-w-7xl relative mx-auto">
        <Link
          to="/"
          className="absolute top-4 left-4 px-8 py-1 border border-black z-10"
        >
          LOGO
        </Link>
        <GiHamburgerMenu
          className="absolute top-4 right-8 lg:right-4 text-3xl cursor-pointer"
          onClick={() => setIsShowNav(true)}
        />
      </section>

      <Navbar isShowNav={isShowNav} setIsShowNav={setIsShowNav} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;

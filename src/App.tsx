import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Link
        to="/"
        className="absolute top-4 left-4 px-8 py-1 border border-black"
      >
        LOGO
      </Link>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;

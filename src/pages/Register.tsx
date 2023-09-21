import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const [isShowError, setIsShowError] = useState(false);

  const handleOnSubmit = (
    e: React.FormEvent,
    userId: string,
    password: string,
    confirmPassword: string
  ) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsShowError(true);
    } else {
      setIsShowError(false);
      alert(JSON.stringify({ userId, password, confirmPassword }));
    }
  };

  return (
    <div className="h-screen grid place-items-center bg-bubbles">
      <Link
        to="/"
        className="absolute top-4 left-4 px-8 py-1 border border-black"
      >
        LOGO
      </Link>

      <section>
        <h1 className="text-4xl">
          Welcome to <span className="font-bold">myApp</span>
        </h1>
        <div className="border-t-4 border-black w-1/2 mx-auto mt-4"></div>

        <RegisterForm handleOnSubmit={handleOnSubmit} />
      </section>

      {isShowError && (
        <div className="absolute bottom-0 bg-red-500 text-white py-2 px-4 rounded-t-lg">
          <p className="italic">Your passwords do not match.</p>
        </div>
      )}
    </div>
  );
};

export default Register;

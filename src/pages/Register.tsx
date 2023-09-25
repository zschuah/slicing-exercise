import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterForm, { FormValues } from "../components/RegisterForm";

const Register = () => {
  const [isShowError, setIsShowError] = useState(false);

  const handleFormSubmit = (data: FormValues) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      setIsShowError(true);
    } else {
      setIsShowError(false);
    }
  };

  return (
    <div className="h-screen grid place-items-center bg-bubbles">
      <section>
        <h1 className="text-4xl">
          Welcome to <span className="font-bold">myApp</span>
        </h1>
        <div className="border-t-4 border-black w-1/2 mx-auto mt-4"></div>

        <RegisterForm handleFormSubmit={handleFormSubmit} />

        <p className="text-center">
          <span>Already registered? </span>
          <Link className="underline" to="/">
            Login here.
          </Link>
        </p>
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

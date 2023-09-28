import bcrypt from "bcryptjs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm, { FormValues } from "../components/RegisterForm";
import { useAuthContext } from "../context/AuthContext";
import useCreateUser from "../hooks/useCreateUser";

const Register = () => {
  const { setIsAuth } = useAuthContext();
  const navigate = useNavigate();
  const [isShowError, setIsShowError] = useState(false);

  const { createUser, isLoading } = useCreateUser();

  const handleFormSubmit = (data: FormValues) => {
    if (data.password === data.confirmPassword) {
      setIsShowError(false);

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync("password", salt);

      //Send to database
      createUser({ userId: data.userId, password: hash });

      // setIsAuth(true);
      // navigate("/contacts");
    } else {
      setIsShowError(true);
    }
  };

  return (
    <div className="h-screen grid place-items-center bg-bubbles">
      <section>
        <h1 className="text-4xl text-center">
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

import bcrypt from "bcryptjs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import RegisterForm, { FormValues } from "../components/RegisterForm";
import useCreateUser from "../hooks/useCreateUser";

const Register = () => {
  const [registerError, setRegisterError] = useState("");

  const { createUser, isLoading } = useCreateUser(setRegisterError);

  const handleFormSubmit = (data: FormValues) => {
    if (data.password === data.confirmPassword) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync("password", salt);
      //Persist to firebase database
      createUser({ userId: data.userId, password: hash });
    } else {
      setRegisterError("Your passwords do not match.");
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

      <div
        className={twMerge(
          "absolute bottom-0 bg-red-500 text-white py-2 px-4 rounded-t-lg",
          !registerError && "translate-y-full",
          "transition"
        )}
      >
        <p className="italic">{registerError}</p>
      </div>
    </div>
  );
};

export default Register;

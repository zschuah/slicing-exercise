import { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import LoginForm, { FormValues } from "../components/LoginForm";
import useLoginUser from "../hooks/useLoginUser";

const Login = () => {
  const [isShowError, setIsShowError] = useState(false);
  const { loginUser, isLoading } = useLoginUser(setIsShowError);

  const handleFormSubmit = (data: FormValues) => {
    //Verify with firebase database
    loginUser(data);
  };

  return (
    <div
      className={twMerge(
        "h-screen grid place-items-center bg-bubbles",
        "relative overflow-hidden"
      )}
    >
      <section>
        <h1 className="text-4xl text-center">
          Welcome to <span className="font-bold">myApp</span>
        </h1>
        <div className="border-t-4 border-black w-1/2 mx-auto mt-4"></div>

        <LoginForm handleFormSubmit={handleFormSubmit} isLoading={isLoading} />

        <p className="text-center">
          <span>No account? </span>
          <Link className="underline" to="/register">
            Register here.
          </Link>
        </p>
      </section>

      <div
        className={twMerge(
          "absolute bottom-0 bg-red-500 text-white py-2 px-4 rounded-t-lg",
          !isShowError && "translate-y-full",
          "transition"
        )}
      >
        <p className="italic">Your user ID and/or password does not match.</p>
      </div>
    </div>
  );
};

export default Login;

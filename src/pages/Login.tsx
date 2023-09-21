import ButtonBlack from "../layout/ButtonBlack";
import InputGray from "../layout/InputGray";
import InputGrayPass from "../layout/InputGrayPass";
import { useState } from "react";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isKeepLogged, setIsKeepLogged] = useState(false);

  const [isShowError, setIsShowError] = useState(false);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsShowError(true);
  };

  const handleValidateUserId = (value: string) => {
    setIsUserIdValid(false);
    if (value.length > 0) {
      setIsUserIdValid(true);
    }
  };

  const handleValidatePassword = (value: string) => {
    setIsPasswordValid(false);
    if (value.length > 0) {
      setIsPasswordValid(true);
    }
  };

  return (
    <div className="h-screen grid place-items-center bg-bubbles">
      <section>
        <h1 className="text-4xl">
          Welcome to <span className="font-bold">myApp</span>
        </h1>
        <div className="border-t-4 border-black w-1/2 mx-auto mt-4"></div>

        <form onSubmit={handleOnSubmit} className="my-10 space-y-4">
          <div className="flex items-center relative">
            <label htmlFor="user-id" className="w-24 text-lg text-right pr-2">
              User ID*
            </label>
            <InputGray
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
                handleValidateUserId(e.target.value);
              }}
              id="user-id"
            />
          </div>

          <div className="flex items-center relative">
            <label htmlFor="password" className="w-24 text-lg text-right pr-2">
              Password*
            </label>
            <InputGrayPass
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handleValidatePassword(e.target.value);
              }}
              id="password"
            />
          </div>

          <div>
            <input
              id="keep-logged"
              type="checkbox"
              className="ml-24 mr-1"
              checked={isKeepLogged}
              onChange={() => setIsKeepLogged(!isKeepLogged)}
            />
            <label htmlFor="keep-logged">Keep me logged in</label>
          </div>

          <ButtonBlack
            className="ml-24"
            disabled={!isUserIdValid || !isPasswordValid}
          >
            Login
          </ButtonBlack>

          <p className="">No account? Register here.</p>
        </form>
      </section>

      {isShowError && (
        <div className="absolute bottom-0 bg-red-500 text-white py-2 px-4 rounded-t-lg">
          <p className="italic">Your user ID and/or password does not match.</p>
        </div>
      )}
    </div>
  );
};

export default Login;

import { useState } from "react";
import ButtonBlack from "../layout/ButtonBlack";
import InputGray from "../layout/InputGray";
import InputGrayPass from "../layout/InputGrayPass";

type PropTypes = {
  handleOnSubmit: (
    e: React.FormEvent,
    userId: string,
    password: string,
    isKeepLogged: boolean
  ) => void;
};

const LoginForm = ({ handleOnSubmit }: PropTypes) => {
  const [userId, setUserId] = useState("");
  const [isUserIdValid, setIsUserIdValid] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [isKeepLogged, setIsKeepLogged] = useState(false);

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
    <form
      onSubmit={(e) => handleOnSubmit(e, userId, password, isKeepLogged)}
      className="space-y-4 mt-10 mb-5"
    >
      <div className="flex items-center relative">
        <label htmlFor="user-id" className="w-1/2 text-lg text-right pr-2">
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
        <label htmlFor="password" className="w-1/2 text-lg text-right pr-2">
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
    </form>
  );
};

export default LoginForm;

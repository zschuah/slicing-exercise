const LoginForm = () => {
  return (
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
  );
};

export default LoginForm;

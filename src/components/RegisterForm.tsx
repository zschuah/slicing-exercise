import { SubmitHandler, useForm } from "react-hook-form";
import ButtonBlack from "../layout/ButtonBlack";
import InputGray from "../layout/InputGray";
import InputGrayPass from "../layout/InputGrayPass";

export type FormValues = {
  userId: string;
  password: string;
  confirmPassword: string;
};

type PropTypes = {
  handleFormSubmit: SubmitHandler<FormValues>;
  isLoading: boolean;
};

const RegisterForm = ({ handleFormSubmit, isLoading }: PropTypes) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<FormValues>();

  return (
    <form
      className="space-y-4 mt-10 mb-5"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex items-center relative">
        <label htmlFor="user-id" className="w-40 text-lg text-right pr-2">
          User ID*
        </label>
        <InputGray id="user-id" {...register("userId", { required: true })} />
      </div>

      <div className="flex items-center relative">
        <label htmlFor="password" className="w-40 text-lg text-right pr-2">
          Password*
        </label>
        <InputGrayPass
          id="password"
          {...register("password", { required: true })}
        />
      </div>

      <div className="flex items-center relative">
        <label
          htmlFor="confirm-password"
          className="w-40 text-lg text-right pr-2"
        >
          Confirm password*
        </label>
        <InputGrayPass
          id="confirm-password"
          {...register("confirmPassword", { required: true })}
        />
      </div>

      <ButtonBlack
        className="ml-40 px-8"
        disabled={!isDirty || !isValid || isLoading}
      >
        Register
      </ButtonBlack>
    </form>
  );
};

export default RegisterForm;

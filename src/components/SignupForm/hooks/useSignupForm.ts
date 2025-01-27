import { SubmitHandler } from "react-hook-form";
import { signUp } from "../../../api/users/signup";
import { SignupRegisterFormInputs } from "../types";
import { useState } from "react";

export function useSignupForm() {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const onSubmit: SubmitHandler<SignupRegisterFormInputs> = async (data) => {
    const req = await signUp(data);

    if (req) {
      return setIsSuccess(true);
    }

    setIsSuccess(false);
  };

  return {
    onSubmit,
    setIsSuccess,
    isSuccess,
  };
}

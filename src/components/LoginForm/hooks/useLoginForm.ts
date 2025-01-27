import { SubmitHandler } from "react-hook-form";
import { LoginRegisterFormInputs } from "../types";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/users/login";

export function useLoginForm() {
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<LoginRegisterFormInputs> = async (data) => {
    const token = await login(data);

    if (token) {
      return navigate("/posts");
    }
  };

  return {
    onSubmit,
  };
}

import { useForm } from "react-hook-form";
import socializeLogo from "../../assets/socialize-logo-white.png";
import { Link } from "react-router-dom";
import { LoginRegisterFormInputs } from "./types";
import { useLoginForm } from "./hooks/useLoginForm";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRegisterFormInputs>();

  const { onSubmit } = useLoginForm();

  return (
    <form
      className="w-full flex flex-col items-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <img
        className={`absolute ${errors ? "bottom-[70%]" : "bottom-[68%]"}`}
        src={socializeLogo}
      />
      <fieldset className="w-full flex flex-col gap-2">
        <label htmlFor="username" className="text-base">
          Username
        </label>
        <input
          {...register("username", {
            required: "O username é obrigatório",
          })}
          className="px-6 h-12 rounded-3xl border-2 border-gray-400 outline-none"
          type="text"
          name="username"
          id="username"
          placeholder="Digite seu username"
        />
        {errors.username && (
          <span className="text-red-500 animate-pulse text-sm">
            {errors.username.message}
          </span>
        )}
      </fieldset>
      <fieldset className="w-full flex flex-col gap-2">
        <label htmlFor="password" className="text-base">
          Senha
        </label>
        <input
          {...register("password", { required: "A senha é obrigatória." })}
          className="px-6 h-12 rounded-3xl border-2 border-gray-400 outline-none"
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
        />
        {errors.password && (
          <span className="text-red-500 animate-pulse text-sm">
            {errors.password.message}
          </span>
        )}
      </fieldset>

      <button
        className="bg-blue-500 text-white mt-6 h-12 w-full rounded-3xl hover:opacity-90"
        type="submit"
      >
        Login
      </button>
      <Link className="text-base hover:underline" to="/signup">
        Ainda não tem conta? Cadastre-se!
      </Link>
    </form>
  );
};

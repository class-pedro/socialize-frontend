import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { SignupRegisterFormInputs } from "./types";
import { useSignupForm } from "./hooks/useSignupForm";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupRegisterFormInputs>();

  const { onSubmit, isSuccess, setIsSuccess} = useSignupForm();


  return isSuccess === null ? (
    <form
      className="w-full flex flex-col items-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="w-full flex flex-col gap-2">
        <label htmlFor="name" className="text-base">
          Nome
        </label>
        <input
          {...register("name", { required: "O nome é obrigatório" })}
          className="px-6 h-12 rounded-3xl border-2 border-gray-400 outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
        />
        {errors.name && (
          <span className="text-red-500 animate-pulse text-sm">
            {errors.name.message}
          </span>
        )}
      </fieldset>
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
          placeholder="Crie um username"
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
          placeholder="Crie uma senha"
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
        Cadastrar
      </button>
    </form>
  ) : isSuccess ? (
    <div className="w-full flex flex-col items-center">
      <span className="text-center mt-[-10px] mb-3">
        Cadastro realizado com sucesso!
      </span>
      <Link className="w-full" to="/login">
        <button className="bg-blue-500 text-white mt-6 h-12 w-full rounded-3xl hover:opacity-90">
          Ir para login
        </button>
      </Link>
    </div>
  ) : (
    <div className="w-full flex flex-col items-center">
      <span className="text-red-500 text-3xl text-center font-bold mt-[-26px] mb-6">
        Ops!
      </span>
      <span className="text-center mt-[-10px] mb-3">
        Erro ao efetuar o cadastro.
      </span>
      <span className="text-center mt-[-10px] mb-3">
        Recarregue a página e tente novamente!
      </span>
      <button
        className="bg-blue-500 text-white mt-6 h-12 w-full rounded-3xl hover:opacity-90"
        onClick={() => {
          setIsSuccess(null);
          window.location.reload();
        }}
      >
        Recarregar
      </button>
    </div>
  );
};

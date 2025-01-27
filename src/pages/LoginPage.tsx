import { LoginForm } from "../components/LoginForm/LoginForm";


function LoginPage() {
  return (
    <main className="bg-blue-500 w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="max-w-[500px] w-[90%] bg-white px-6 py-8 flex flex-col items-center r gap-4 rounded-2xl shadow-2xl">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;

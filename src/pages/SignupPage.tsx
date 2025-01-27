import React from "react";
import { Link } from "react-router-dom";
import socializeLogo from "../assets/socialize-logo-blue.png";
import { SignupForm } from "../components/SignupForm/SignupForm";

const SignupPage: React.FC = () => {
  return (
    <main className="bg-blue-500 w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="max-w-[500px] relative w-[90%] bg-white px-6 py-8 flex flex-col items-center r gap-4 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center">
          <img src={socializeLogo} />
        </div>
        <SignupForm />
        <Link
          to="/login"
          className="absolute text-white top-[103%] hover:underline"
        >
          Já possui conta? Entrar!
        </Link>
      </div>
    </main>
  );
};

export default SignupPage;

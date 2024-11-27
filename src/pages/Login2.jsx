import React from "react";
import Header from "../components/Header";
import AuthForm from "../components/AuthForm";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const handleLogin = async (formData) => {
    try {
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <>
      <Header />
      <div className="bg-slate-100 text-[#484848] h-full flex flex-col justify-between min-h-screen">
        <div className=" container mx-auto pt-10 main">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
              <h1 className="font-bold text-3xl mb-6">로그인</h1>
              <div className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
                <AuthForm mode="login" onSubmit={handleLogin} />
                <button className="w-full bg-[#FF5A5F] text-white py-3 rounded-lg hover:bg-[#fff] transition duration-300 hover:text-[#FF5A5F] hover:border-rose-400 border">
                  로그인
                </button>
              </div>
              <div className="mt-4">
                <p>
                  계정이 없으신가요?{" "}
                  <Link
                    to="/signup"
                    className="text-[#FF5A5F] hover:text-[#4b5563] hover:underline"
                  >
                    회원가입
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

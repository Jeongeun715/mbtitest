// import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleLogin = async (formData) => {
    try {
      const { id, password } = formData;
      const data = await login({ id, password });
      if (data.success) {
        setUser(data);
        navigate("/");
      }
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      console.log(error);
    }
  };
  return (
    <div className="bg-slate-100 text-[#484848] h-full flex flex-col justify-between min-h-screen">
      <div className=" container mx-auto pt-10 main ">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
            <h1 className="font-bold text-3xl mb-6">로그인</h1>
            <AuthForm mode="login" onSubmit={handleLogin} setUser={setUser} />
            <div>
              <p className="mt-3">
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
  );
};

export default Login;

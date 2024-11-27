import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = async (formData) => {
    try {
      const data = await register(formData);
      // 메세지 회원가입성공, 석세스 트루
      if (data.success) {
        navigate("/login");
      }
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="bg-slate-100 text-[#484848] h-full flex flex-col justify-between min-h-screen">
      <div className=" container mx-auto pt-10 main">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
            <h1 className="font-bold text-3xl mb-6 text-center">회원가입</h1>
            <AuthForm mode="signup" onSubmit={handleSignup} />
            <div>
              <p className="mt-3">
                이미 계정이 있으신가요?{" "}
                <Link
                  to="/login"
                  className="text-[#FF5A5F] hover:text-[#4b5563] hover:underline"
                >
                  로그인
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

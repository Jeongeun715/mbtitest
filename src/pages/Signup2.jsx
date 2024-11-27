import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"; // SweetAlert2 추가
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";
import RedButton from "../components/RedButton";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

const Signup = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");

  const fetchUsers = async () => {
    const res = await instance.get(`/users`);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = async () => {
    if (!userId || !userPassword || !userNickname) {
      // 입력 값 검증 및 경고창 추가
      Swal.fire({
        title: "입력 오류",
        text: "모든 필드를 입력해주세요!",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }
    if (userPassword.length < 5) {
      Swal.fire({
        title: "비밀번호 오류",
        text: "비밀번호는 5자 이상이어야 합니다.",
        icon: "error",
        confirmButtonText: "확인",
      });
      return;
    }
    // 사용자 데이터 추가 요청 및 성공 시 알림창 표시
    await instance.post(`/users`, {
      userId: userId,
      userPassword: userPassword,
      userNickname: userNickname,
    });

    Swal.fire({
      title: "회원가입 완료!",
      text: `로그인 페이지로 이동합니다.`,
      icon: "success",
      confirmButtonText: "확인",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login"); // "/login" 경로로 이동
      }
    });

    // 입력 필드 초기화 및 사용자 목록 갱신
    setUserId("");
    setUserPassword("");
    setUserNickname("");
    fetchUsers();
  };

  return (
    <>
      <div className="bg-slate-100 text-[#484848] h-full flex flex-col justify-between min-h-screen">
        <div className=" container mx-auto pt-10 main">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
              <h1 className="font-bold text-3xl mb-6 text-center">회원가입</h1>
              <div className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
                <AuthForm
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="아이디" // 이 값이 전달됨
                />
                <AuthForm
                  type="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  placeholder="비밀번호"
                />
                <AuthForm
                  type="text"
                  value={userNickname}
                  onChange={(e) => setUserNickname(e.target.value)}
                  placeholder="닉네임"
                />
                <RedButton title="회원가입" onClick={handleAdd}>
                  회원가입
                </RedButton>
              </div>
              <div className="mt-4">
                <span>이미 계정이 있으신가요?</span>
                <span className="text-[#FF5A5F] hover:text-[#4b5563] hover:underline">
                  로그인
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

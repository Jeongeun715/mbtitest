import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Header = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null); // 로그아웃 처리
    Swal.fire({
      title: "로그아웃 되었습니다.",
      icon: "success",
      confirmButtonText: "확인",
    });
  };
  console.log(user);

  return (
    <div className="bg-slate-100 p-4 border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* 공통 링크 */}
        <Link
          to="/"
          className="text-lg font-semibold text-[#FF5A5F] hover:text-[#ffc1c3] cursor-pointer"
        >
          홈
        </Link>

        {/* 로그인 상태에 따라 다른 링크 표시 */}
        {user ? (
          <div className="flex gap-4">
            <Link
              to="/profile"
              className="text-lg font-semibold text-[#FF5A5F] hover:text-[#ffc1c3] cursor-pointer"
            >
              프로필
            </Link>
            <Link
              to="/testPage"
              className="text-lg font-semibold text-[#FF5A5F] hover:text-[#ffc1c3] cursor-pointer"
            >
              테스트
            </Link>
            <Link
              to="/testResultPage"
              className="text-lg font-semibold text-[#FF5A5F] hover:text-[#ffc1c3] cursor-pointer"
            >
              결과
            </Link>
            <button
              onClick={handleLogout}
              className="text-lg font-semibold text-[#FF5A5F] hover:text-[#ffc1c3] cursor-pointer"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="text-lg font-semibold text-[#FF5A5F] hover:text-[#ffc1c3] cursor-pointer"
          >
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

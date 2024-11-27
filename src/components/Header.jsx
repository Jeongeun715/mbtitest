import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-slate-100 p-4 border-b-2 ">
        <div className="container mx-auto flex justify-between items-center text-white">
          <Link
            to={"/"}
            className="text-lg font-semibold text-[#FF5A5F] hover:text-[#ffc1c3] cursor-pointer"
          >
            홈
          </Link>
          <Link
            to={"/profile"}
            className="text-lg font-semibold text-[#FF5A5F] hover:text-[#ffc1c3] cursor-pointer"
          >
            프로필
          </Link>
          <Link
            to={"/testPage"}
            className="text-lg font-semibold text-[#FF5A5F] hover:text-[#ffc1c3] cursor-pointer"
          >
            테스트
          </Link>
          <Link
            to={"/testResultPage"}
            className="text-lg font-semibold text-[#FF5A5F] hover:text-[#ffc1c3] cursor-pointer"
          >
            결과
          </Link>
          <Link
            to={"/login"}
            className="text-lg font-semibold text-[#FF5A5F] hover:text-[#ffc1c3] cursor-pointer"
          >
            로그인
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import Header from "../components/Header";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import RedButton from "../components/RedButton";

const Home = () => {
  const handleClick = () => {
    Swal.fire({
      title: "알림",
      text: "로그인이 필요합니다. 로그인 페이지로 이동합니다.",
      icon: "warning",
      confirmButtonText: "확인",
    });
  };
  return (
    <>
      <div className="bg-slate-100 text-[#484848] h-full flex flex-col justify-between min-h-screen">
        <div className=" container mx-auto pt-10 main">
          <div className=" text-center">
            <h1 className="font-bold text-5xl mb-6">무료 성격 테스트</h1>
            <p className="mb-8 text-lg">
              자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">성격 유형 검사</h2>
              <p>
                자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
                미치는지 알아보세요.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">성격 유형 이해</h2>
              <p>
                다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수
                있습니다.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">팀 평가</h2>
              <p>
                팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
                배워보세요.
              </p>
            </div>
          </div>

          <Link to="/login" className="flex justify-center w-full">
            <RedButton
              title="내 성격 알아보러 가기"
              onClick={handleClick}
            ></RedButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

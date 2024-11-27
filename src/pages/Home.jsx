import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Home = ({ user }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (user) {
      // 로그인된 상태에서 테스트 페이지로 이동
      navigate("/testPage");
    } else {
      // 로그인되지 않은 상태에서 경고창 표시
      Swal.fire({
        title: "알림",
        text: "로그인이 필요합니다. 로그인 페이지로 이동합니다.",
        icon: "warning",
        confirmButtonText: "확인",
      }).then(() => {
        navigate("/login"); // 로그인 페이지로 이동
      });
    }
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

          <div className="flex justify-center w-full">
            <button
              className="w-full bg-[#FF5A5F] text-white py-3 rounded-lg hover:bg-[#fff] transition duration-300 hover:text-[#FF5A5F] hover:border-rose-400 border"
              onClick={handleClick}
            >
              내 성격 알아보러 가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const [result, setResult] = useState(null); // 최종 MBTI 결과
  const [answers, setAnswers] = useState([]); // 사용자의 답변
  const navigate = useNavigate();

  const handleTestSubmit = (answers) => {
    // 답변 데이터를 사용해 MBTI 결과 계산
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult); // 결과 상태에 저장
    setAnswers(answers); // 답변 데이터 저장 (선택 사항)
  };

  const handleNavigateToResults = () => {
    // 결과 페이지로 이동
    navigate("/testResultPage", { state: { result, answers } });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full shadow-lg">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-[#FF5A5F] text-white py-3 rounded-lg hover:bg-[#fff] transition duration-300 hover:text-[#FF5A5F] hover:border-rose-400 border"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;

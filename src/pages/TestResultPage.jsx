import React from "react";
import { useLocation } from "react-router-dom";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultPage = () => {
  const location = useLocation();
  const { result, answers } = location.state || {};

  if (!result) {
    return <p>결과 데이터가 없습니다. 테스트를 먼저 진행해주세요.</p>;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full shadow-lg">
        <h1 className="text-3xl font-bold text-primary-color mb-6">
          MBTI 결과: {result}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
        </p>
        <h2 className="text-xl font-semibold mb-4">답변 요약</h2>
        <ul className="list-disc list-inside">
          {answers.map((answer, index) => (
            <li key={index}>
              {index + 1}번 질문 ({answer.type}): {answer.answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestResultPage;

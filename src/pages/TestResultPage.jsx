import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTestResults } from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultPage = () => {
  const location = useLocation();
  const { result, nickname } = location.state || {};

  const [results, setResults] = useState([]);

  // 모든 결과 가져오기
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getTestResults();
        setResults(data);
      } catch (error) {
        console.error("결과를 가져오지 못했습니다.", error);
      }
    };
    fetchResults();
  }, []);

  if (!result) {
    return (
      <div className="w-full flex flex-col items-center justify-center bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg p-8 max-w-lg w-full shadow-lg mb-6">
          <p className="text-lg text-gray-700 mb-6">
            결과 데이터가 없습니다. 테스트를 먼저 진행해주세요.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full shadow-lg mb-6">
        <h1 className="text-3xl font-bold text-primary-color mb-6">
          MBTI 결과: {result}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
        </p>
      </div>
    </div>
  );
};

export default TestResultPage;

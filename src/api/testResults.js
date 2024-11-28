import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

// 모든 결과 가져오기
export const getTestResults = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("결과 조회 실패:", error.message);
    throw error;
  }
};

// 새로운 결과 추가
export const createTestResult = async (newResult) => {
  try {
    const response = await axios.post(API_URL, newResult);
    return response.data;
  } catch (error) {
    console.error("결과 추가 실패:", error.message);
    throw error;
  }
};

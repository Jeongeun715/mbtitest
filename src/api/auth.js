import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`, // 인증 토큰 추가
      },
    });

    return response.data; // 사용자 프로필 데이터 반환
  } catch (error) {
    console.error("프로필 가져오기 실패:", error.response || error.message);
    throw new Error(
      error.response?.data?.message || "프로필 정보를 가져올 수 없습니다."
    );
  }
};

export const updateProfile = async (formData, token) => {
  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

import React, { useState } from "react";
import { updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const navigate = useNavigate();
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await updateProfile({ nickname }, user.accessToken);
      if (data.success) {
        alert("프로필 수정에 성공했습니다.");
        setUser({ ...user, nickname, avatar: data.avatar });
        navigate("/");
      }
    } catch (error) {
      alert("프로필 수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="bg-slate-100 text-[#484848] h-full flex flex-col justify-between min-h-screen">
      <div className=" container mx-auto pt-10 main">
        <h1 className="font-bold text-3xl mb-6 text-center">프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center space-x-2">
            <label className="text-gray-700">닉네임</label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="p-2 border border-gray-300 rounded-md flex-grow"
            />
          </div>
          <button
            className="w-full bg-[#FF5A5F] text-white py-3 rounded-lg hover:bg-[#fff] transition duration-300 hover:text-[#FF5A5F] hover:border-rose-400 border mt-4"
            type="submit"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

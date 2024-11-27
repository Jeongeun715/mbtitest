import React from "react";

const RedButton = (props) => {
  return (
    <button className="w-full bg-[#FF5A5F] text-white py-3 rounded-lg hover:bg-[#fff] transition duration-300 hover:text-[#FF5A5F] hover:border-rose-400 border">
      {props.title}
    </button>
  );
};

export default RedButton;

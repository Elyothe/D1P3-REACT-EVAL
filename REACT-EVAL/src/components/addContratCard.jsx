import React from "react";
import { useNavigate } from "react-router-dom";

const AddContratCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/NewContract");
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 mb-4 w-80 h-40 flex justify-center items-center cursor-pointer hover:bg-gray-200"
      onClick={handleClick}
    >
      <h2 className="text-4xl font-bold text-gray-800">+</h2>
    </div>
  );
};

export default AddContratCard;

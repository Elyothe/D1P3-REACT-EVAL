import React from "react";

const ContractCard = ({ contract }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 w-80">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Contrat #{contract.id}
      </h2>
      <p className="text-gray-600">
        <strong>Description:</strong> {contract.description}
      </p>
      <p className="text-gray-600">
        <strong>Status:</strong> {contract.status}
      </p>
    </div>
  );
};

export default ContractCard;

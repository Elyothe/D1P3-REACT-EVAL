import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateContract } from "../api/contrat";
import Header from "../components/header";

const ChangeContrat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const contract = location.state.contract;

  const [title, setTitle] = useState(contract?.title || "");
  const [description, setDescription] = useState(contract?.description || "");
  const [reward, setReward] = useState(contract?.reward || "");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateContract(contract.id, { title, description, reward });
      navigate("/Contrat");
    } catch (err) {
      setError("Erreur lors de la mise à jour du contrat");
    }
  };

  return (
    <div className="bg-background min-h-screen text-black">
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Modifier le contrat</h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Reward</label>
              <input
                type="text"
                value={reward}
                onChange={(e) => setReward(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Modifier le contrat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeContrat;

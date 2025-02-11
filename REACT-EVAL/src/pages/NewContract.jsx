import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addContract } from "../api/contrat";

const NewContract = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reward, setReward] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !reward) {
      setError("Tous les champs sont obligatoires");
      return;
    }

    try {
      const newContract = await addContract(title, description, reward);
      if (newContract) {
        navigate("/Contrat");
      } else {
        setError("Erreur lors de la création du contrat");
      }
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Créer un nouveau contrat
        </h1>
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
            Créer le contrat
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewContract;

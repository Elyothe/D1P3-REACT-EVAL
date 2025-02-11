import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllWitchers } from "../api/sorceleur";
import Header from "../components/Header";

const Login = () => {
  const navigate = useNavigate();
  const [witchers, setWitchers] = useState([]);
  const [error, setError] = useState(null);

  const fetchAllWitchers = async () => {
    try {
      const data = await getAllWitchers();
      setWitchers(data);
    } catch (error) {
      setError("Erreur lors de la récupération des witchers");
    }
  };

  useEffect(() => {
    fetchAllWitchers();
  }, []);

  return (
    <div className="bg-background min-h-screen text-black">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">
          Choisis ton Sorceleur
        </h1>
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <>
            <div className="w-80">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="witcher-select"
              >
                Sélectionne un Sorceleur :
              </label>
              <select
                id="witcher-select"
                className="w-full border border-gray-300 rounded-lg p-2"
                defaultValue=""
              >
                <option value="" disabled>
                  -- Choisir un Sorceleur --
                </option>
                {witchers.map((witcher) => (
                  <option key={witcher.id} value={witcher.id}>
                    {witcher.name}
                  </option>
                ))}
              </select>

              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-4"
                onClick={() => navigate("/Contrat")}
              >
                Valider
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

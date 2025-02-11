import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import { getWitcherById } from "../api/sorceleur";

const ContratDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Récupération de l'objet passé via state
  const contract = location.state?.contract;
  const [contractDetails, setContractDetails] = useState(contract || null);
  const [witcher, setWitcher] = useState(null);

  useEffect(() => {
    // Vérification si le contrat existe avant d'essayer de charger un sorceleur
    if (contractDetails && contractDetails.assignedTo) {
      const assignWitcher = async () => {
        try {
          const witcherData = await getWitcherById(contractDetails.assignedTo);
          setWitcher(witcherData);
        } catch (error) {
          console.error("Erreur lors de la récupération du sorceleur", error);
        }
      };
      assignWitcher();
    }
  }, [contractDetails]);

  return (
    <div className="bg-background min-h-screen text-black">
      <Header />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Détails du Contrat
          </h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium text-gray-700">Titre :</h2>
              <p className="text-gray-600">{contractDetails?.title}</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-700">
                Description :
              </h2>
              <p className="text-gray-600">{contractDetails?.description}</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-700">Statut :</h2>
              <p className="text-gray-600">{contractDetails?.status}</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-700">Reward :</h2>
              <p className="text-gray-600">{contractDetails?.reward}</p>
            </div>
            {witcher ? (
              <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-700">
                  Sorceleur Assigné :
                </h2>
                <p className="text-gray-600">{witcher?.name}</p>
              </div>
            ) : (
              <p className="text-gray-600 mt-8">Aucun sorceleur assigné.</p>
            )}
          </div>

          <div className="mt-8 text-right">
            <button
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
              onClick={() => navigate("/Contrat")}
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContratDetails;

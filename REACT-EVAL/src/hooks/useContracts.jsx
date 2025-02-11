import { useState, useEffect } from "react";
import { getAllContract, getContractById } from "../api/contrat";

const useContrat = () => {
  const [contracts, setContracts] = useState([]);
  const [contract, setContract] = useState(null);
  const [error, setError] = useState(null);

  const fetchContracts = async () => {
    try {
      const data = await getAllContract(); // Appel à l'API pour récupérer les contrats
      setContracts(data); // Mise à jour de l'état des contrats
    } catch (error) {
      setError("Erreur lors de la récupération des contrats"); // En cas d'erreur
    }
  };

  const fetchContractById = async (id) => {
    try {
      const data = await getContractById(id); // Appel à l'API pour récupérer un contrat par ID
      setContract(data); // Mise à jour de l'état du contrat spécifique
    } catch (error) {
      setError("Erreur lors de la récupération du contrat"); // En cas d'erreur
    }
  };

  // Exécuter `fetchContracts` une fois lors du montage du composant
  useEffect(() => {
    fetchContracts();
  }, []);

  return {
    contracts,
    contract,
    error,
    fetchContracts,
    fetchContractById,
  };
};

export default useContrat;

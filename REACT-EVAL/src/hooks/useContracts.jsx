import { useState, useEffect } from "react";
import { getAllContracts, getContractById } from "../api/contrat";

const useContrat = () => {
  const [contracts, setContracts] = useState([]);
  const [contract, setContract] = useState(null);
  const [error, setError] = useState(null);

  const fetchContracts = async () => {
    try {
      const data = await getAllContracts();
      setContracts(data);
    } catch (error) {
      setError("Erreur lors de la récupération des contrats");
    }
  };

  const fetchContractById = async (id) => {
    try {
      const data = await getContractById(id);
      setContract(data);
    } catch (error) {
      setError("Erreur lors de la récupération du contrat");
    }
  };

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

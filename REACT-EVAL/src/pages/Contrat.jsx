import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getContractByTitle,
  getContractByStatus,
  getAllContracts,
} from "../api/contrat";
import ContractCard from "../components/ContractCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import AddContratCard from "../components/AddContratCard";

const Contrat = () => {
  const [contracts, setContracts] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchAllContracts = async () => {
    try {
      const data = await getAllContracts();
      setContracts(data);
    } catch (error) {
      setError("Erreur lors de la récupération des contrats");
    }
  };

  const fetchContractsByTitle = async (title) => {
    try {
      const data = await getContractByTitle(title);
      setContracts(data);
    } catch (error) {
      setError("Erreur lors de la récupération des contrats");
    }
  };

  const fetchContractsByStatus = async (status) => {
    try {
      const data = await getContractByStatus(status);
      setContracts(data);
    } catch (error) {
      setError("Erreur lors de la récupération des contrats");
    }
  };

  useEffect(() => {
    if (!titleFilter && !statusFilter) {
      fetchAllContracts();
    } else {
      if (titleFilter) {
        fetchContractsByTitle(titleFilter);
      }
      if (statusFilter) {
        fetchContractsByStatus(statusFilter);
      }
    }
  }, [titleFilter, statusFilter]);

  const handleTitleSearch = (query) => {
    setTitleFilter(query);
  };

  const handleStatusSearch = (query) => {
    setStatusFilter(query);
  };

  const handleContractClick = (contract) => {
    navigate("/ContratDetails", { state: { contract } });
  };

  const handleEditContract = (contract) => {
    navigate("/ChangeContrat", { state: { contract } });
  };

  return (
    <div className="bg-background min-h-screen text-black">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">
          Liste des Contrats
        </h1>
        {error ? (
          <div>{error}</div>
        ) : (
          <>
            <div className="w-full max-w-3xl mb-6">
              <SearchBar
                placeholder="Rechercher par titre"
                onSearch={handleTitleSearch}
              />
            </div>
            <div className="w-full max-w-3xl mb-6">
              <SearchBar
                placeholder="Rechercher par statut (Available, Assigned, Completed)"
                onSearch={handleStatusSearch}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex justify-center sm:col-span-1 md:col-span-1">
                <AddContratCard />
              </div>

              {contracts.length > 0 ? (
                contracts.map((contract) => (
                  <ContractCard
                    key={contract.id}
                    contract={contract}
                    onClick={() => handleContractClick(contract)}
                    onEdit={() => handleEditContract(contract)}
                  />
                ))
              ) : (
                <div className="flex justify-center col-span-full text-center mt-4">
                  Aucun contrat trouvé avec ces critères.
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contrat;

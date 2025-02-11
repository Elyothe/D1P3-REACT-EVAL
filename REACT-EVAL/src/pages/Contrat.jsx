import React, { useEffect, useState } from "react";
import { getAllContract } from "../api/contrat";
import ContractCard from "../components/ContractCard";
import Header from "../components/header";

const Contrat = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContrat = async () => {
      try {
        const data = await getAllContract();
        setContracts(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des contrats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContrat();
  }, []);

  return (
    <div className="bg-background min-h-screen text-black">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">
          Liste des Contrats
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contracts.map((contractItem) => (
            <ContractCard key={contractItem.id} contract={contractItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contrat;

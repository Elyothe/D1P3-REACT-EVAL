// Définir l'URL de base de l'API
export const getAllContracts = async () => {
  try {
    const response = await fetch(`/api/contracts`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Une erreur est survenue:", err);
    return [];
  }
};

export const getContractById = async (id) => {
  try {
    const response = await fetch(`/api/contracts/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Une erreur est survenue:", err);
    return {};
  }
};

export const getContractByTitle = async (title) => {
  try {
    const response = await fetch(`/api/contracts/?title=${title}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Une erreur est survenue:", err);
    return {};
  }
};

export const getContractByStatus = async (status) => {
  try {
    const response = await fetch(`/api/contracts/?status=${status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Une erreur est survenue:", err);
    return {};
  }
};

export const addContract = async (title, description, reward) => {
  try {
    const response = await fetch("/api/contracts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, reward }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la création du contrat");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Une erreur est survenue:", err);
    return null;
  }
};

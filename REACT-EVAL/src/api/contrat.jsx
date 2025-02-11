// Définir l'URL de base de l'API
export const getAllContract = async () => {
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

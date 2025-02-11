// Définir l'URL de base de l'API
export const getAllWitchers = async () => {
  try {
    const response = await fetch(`/api/witchers`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Une erreur est survenue:", err);
    return [];
  }
};

export const getWitcherById = async (id) => {
  try {
    const response = await fetch(`/api/witchers/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Une erreur est survenue:", err);
    return {};
  }
};

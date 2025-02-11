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

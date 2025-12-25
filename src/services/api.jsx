const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiGet = async (endpoint) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!res.ok) {
    throw new Error("API request failed");
  }
  return res.json();
};

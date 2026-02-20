// src/services/api.ts

export const BASE_URL = 'https://portifolio-api-asaa.onrender.com';

export const API_ENDPOINTS = {
  GENERAL: `${BASE_URL}/`,
  COMPANIES: `${BASE_URL}/companies`,
  EDUCATION: `${BASE_URL}/education`,
};

export const fetchData = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error("Erro de conexão:", error);
    return null;
  }
};
import axios from 'axios';

// Configuration de l'instance Axios pour communiquer avec l'API
const API = axios.create({
  baseURL: 'https://api.example.com', // Remplace par l'URL de ton API
});

// Ajout du token dans l'entête Authorization pour toutes les requêtes
API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ton_token_ici`; // Remplace avec ton token réel
  return config;
});

// Fonctions pour récupérer, ajouter, mettre à jour et supprimer des checklists

export const getChecklists = () => API.get('/checklists');
export const addChecklist = (data) => API.post('/checklists', data);
export const updateChecklist = (id, data) => API.put(`/checklists/${id}`, data);
export const deleteChecklist = (id) => API.delete(`/checklists/${id}`);

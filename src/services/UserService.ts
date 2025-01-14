import axios from "axios";
import { defaultHeader } from "./Header";

const API_BASE_URL = "http://localhost:3000/api/users";
const TOKEN = localStorage.getItem('access_token');

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchUserById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar usuário com ID ${id}.`);
  }
};

export const createUser = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, data, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao criar um novo usuário.");
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, data, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao atualizar um usuário.");
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao deletar um usuário.");
  }
};

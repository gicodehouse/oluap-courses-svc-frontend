import axios from "axios";
import { defaultHeader } from "./Header";

const API_BASE_URL = "http://localhost:3000/api/courses";
const TOKEN = localStorage.getItem('access_token');

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchCourseById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar curso com ID ${id}.`);
  }
};

export const createCourse = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, data, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao criar um novo curso.");
  }
};

export const updateCourse = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, data, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao atualizar um curso.");
  }
};

export const deleteCourse = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao deletar um curso.");
  }
};

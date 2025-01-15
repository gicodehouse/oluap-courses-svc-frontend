import axios from "axios";
import { defaultHeader } from "./Header";

const API_BASE_URL = "https://oluap-courses-svc-backend.onrender.com/api/enrollments";
const TOKEN = localStorage.getItem('access_token');

export const fetchEnrollments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {    
    throw new Error(error.response.status);
  }
};

export const fetchEnrollmentById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar matrícula com ID ${id}.`);
  }
};

export const fetchEnrolledCoursesByUserId = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar matrícula com ID ${id}.`);
  }
};

export const createEnrollment = async (data) => {
  try {
    console.log(data);
    
    const response = await axios.post(`${API_BASE_URL}`, data, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao criar um novo matrícula.");
  }
};

export const updateEnrollment = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, data, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao atualizar um matrícula.");
  }
};

export const deleteEnrollment = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`, defaultHeader(TOKEN));
    return response.data;
  } catch (error) {
    throw new Error("Erro ao deletar um matrícula.");
  }
};

import axios from "axios";

const API_BASE_URL = "https://oluap-courses-svc-backend.onrender.com/api/auth/login";

export const fetchLogin = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}`, data);
      return response.data;
    } catch (error) {                        
      throw new Error(error.response.data.error);
    }
  };
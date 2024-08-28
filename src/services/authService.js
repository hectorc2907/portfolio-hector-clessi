import axios from "../utils/axiosConfig.js";

export const registerUser = async (email, password) => {
  const response = await axios.post("/auth/register", { email, password });
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await axios.post("/auth/login", { email, password });
  return response.data;
};

export const refreshAccessToken = async () => {
  const response = await axios.post("/auth/refresh-token");
  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.post("/auth/logout");
  return response.data;
};

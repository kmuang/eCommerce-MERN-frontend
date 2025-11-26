import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => {
  const { data } = await axios.post(`${API_URL}/users/register`, userData);
  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await axios.post(`${API_URL}/users/login`, credentials);
  return data;
};

export const fetchProducts = async () => {
  const { data } = await axios.get(`${API_URL}/products`);
  return data;
};
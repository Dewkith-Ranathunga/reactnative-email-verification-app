import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const registerUser = async (data) => {
  return await axios.post(`${BASE_URL}/register`, data);
};

export const loginUser = async (email, password) => {
  return await axios.post(
    `${BASE_URL}/login?email=${email}&password=${password}`
  );
};

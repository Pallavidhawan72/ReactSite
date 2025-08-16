import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Change to your deployed API URL for production
});

export default api;

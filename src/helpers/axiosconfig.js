import axios from "axios";

const instance = axios.create({
  baseURL: "https://casino-backend-ecni.onrender.com/api/",
  // baseURL: "http://localhost:3000/api/",
  withCredentials: true,
});

export default instance;
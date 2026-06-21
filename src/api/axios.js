import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api", // backend url
  baseURL:
    "https://trade-journal-backend-git-main-robins-projects-73580735.vercel.app/api", // backend url
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;

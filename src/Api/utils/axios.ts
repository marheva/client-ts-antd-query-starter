import axios from "axios";
export const SERVER = process.env.API_SERVER || "http://localhost:8000/api";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: SERVER,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => Promise.reject(error)
);

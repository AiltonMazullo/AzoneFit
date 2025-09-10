import axios from "axios";

const api = axios.create({
  baseURL: "http://147.93.118.28:8080",
});

export default api;
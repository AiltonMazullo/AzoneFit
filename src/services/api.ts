import axios from "axios";

const api = axios.create({
  baseURL: "https://api.dmaeon.com",
});

export default api;

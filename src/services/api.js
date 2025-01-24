import axios from "axios";

const api = axios.create({
    baseURL: "https://todopostgres-backend.onrender.com",
    withCredentials: true
});

export default api;
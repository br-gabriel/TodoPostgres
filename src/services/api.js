import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(request => {
    console.log('Request:', request);
    return request;
});

api.interceptors.response.use(
    response => response,
    error => {
        console.log('Response Error:', error.response);
        return Promise.reject(error);
    }
);

export default api;
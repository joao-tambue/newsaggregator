import axios from "axios";

const api = axios.create({
    baseURL: "https://news-aggregator-api-v3aw.onrender.com/api",
    timeout: 10000,
});

export default api;
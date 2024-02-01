import axios from "axios";

const api = axios.create({
    baseURL:'https://e75f-68-235-144-167.ngrok-free.app',
    headers:{ "ngrok-skip-browser-warning" : "true"}
});

export default api;
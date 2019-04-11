import axios from 'axios';

const api = axios.create({
    baseURL: 'https://will-omnistack.herokuapp.com',
});

export default api;
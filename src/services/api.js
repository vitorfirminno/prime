import axios from 'axios';

//BASE DA URL: https://api.themoviedb.org/3
// URL DA API: /movie/now_playing?api_key=e1802bbd13738ac082fe5174142460e3

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;




import axios, { InternalAxiosRequestConfig } from 'axios';

const axiosAuth = axios.create({
    baseURL: 'http://localhost:8000/api'
});

axiosAuth.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    const isAuthRequest = config.url?.includes('/Login' || '/signUp');
    if(token && !isAuthRequest) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default axiosAuth;
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosAuth = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`
});

// console.log("url", process.env.REACT_APP_API_URL);

axiosAuth.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    const isAuthRequest = config.url?.includes('/Login' || '/signUp');
    if(token && !isAuthRequest) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosAuth.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                const navigate = useNavigate();
                navigate('/Login');
            }
        }
        return Promise.reject(error);
    }
);

export default axiosAuth;
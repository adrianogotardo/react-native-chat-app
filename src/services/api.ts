import axios from 'axios';
import { AppError } from '../utils/AppError';

const api = axios.create({
    baseURL: 'http://192.168.4.100:4000'
});

// api.interceptors.request.use((config) => {
//     console.log("INTERCEPTOR REQUEST => ", config);
//     return config;
// }, (error) => {
//     console.log("INTERCEPTOR REQUEST ERROR => ", error);
//     return Promise.reject(error);
// });

api.interceptors.response.use((response) => response, (error) => {
    if(error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message))
    } else {
      return Promise.reject(new AppError(error))
    }
    
});

export { api }
import axios, { AxiosInstance } from 'axios';
require('dotenv').config({path: './config/.env'})

const axiosInstance:AxiosInstance = axios.create({
    baseURL: `${process.env.API_BASE_URL}`,
 
});

export default axiosInstance;
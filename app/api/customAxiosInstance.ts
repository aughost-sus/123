import axios, { AxiosRequestConfig } from "axios";
import https from 'https';


const customAxiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default customAxiosInstance;

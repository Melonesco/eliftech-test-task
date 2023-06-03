import axios, { AxiosInstance } from "axios";

export const instance: AxiosInstance = axios.create({
  baseURL: "https://deploy-back-brown.vercel.app/api/v1",
});

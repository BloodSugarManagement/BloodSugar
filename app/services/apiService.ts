import axios from "axios";
import { postRefreshToken } from "./auth";

const BASE_URL = "http://3.36.57.218:8000";

const commonConfig = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const apiService = axios.create(commonConfig);
export const authApiService = axios.create(commonConfig);

authApiService.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authApiService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshResponse = getRefreshToken();

      if (refreshResponse) {
        try {
          const newAccessToken = await postRefreshToken(refreshResponse);
          localStorage.setItem("access", newAccessToken);

          const newRequestConfig = { ...originalRequest };
          newRequestConfig.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiService(originalRequest);
        } catch (error) {
          console.error("새로운 token발급에 실패했습니다: ", error);
          // 새로운 token발급에 실패시 로그아웃 처리 넣기
        }
      }
    }
    return Promise.reject(error);
  }
);

const getRefreshToken = () => {
  return localStorage.getItem("refresh");
};

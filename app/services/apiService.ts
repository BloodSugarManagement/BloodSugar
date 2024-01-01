import axios from "axios";
import { postRefreshToken } from "./auth";

const BASE_URL = "http://52.78.93.9:8000";

const accessToken = localStorage.getItem("token");

export const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

authApiService.interceptors.request.use(
  async (config) => {
    const refreshToken = await getRefreshToken();

    if (refreshToken) {
      try {
        const newAccessToken = await postRefreshToken(refreshToken);
        config.headers.Authorization = `Bearer ${newAccessToken}`;
        return config;
      } catch (error) {
        return Promise.reject("액세스 토큰 갱신에 실패하였습니다.");
      }
    } else {
      alert("로그인이 필요합니다.");
      return Promise.reject("로그인이 필요합니다.");
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

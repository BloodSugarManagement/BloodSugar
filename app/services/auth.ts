import { apiService, authApiService } from "./apiService";

export const postRefreshToken = async (token: string | undefined) => {
  const res = await apiService.post("/accounts/token/refresh/");
  console.log(res.data);
  return res.data;
};

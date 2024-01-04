import { apiService, authApiService } from "./apiService";

export const postRefreshToken = async (refreshToken: string | undefined) => {
  try {
    const res = await apiService.post("/accounts/token/refresh/", {
      refresh: refreshToken,
    });
    console.log("리프레쉬", res.data.access);
    return res.data.access;
  } catch (error) {
    console.log("새로운 token발급에 실패했습니다: ", error);
    throw new Error("새로운 token발급에 실패했습니다");
  }
};

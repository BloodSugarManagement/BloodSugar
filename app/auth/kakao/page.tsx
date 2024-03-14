"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AuthKakao() {
  const router = useRouter();

  const fetchAuthData = async () => {
    const code = new URL(window.location.href).searchParams.get("code");

    try {
      const response = await axios.get(
        `http://52.78.40.197:8000/accounts/kakao/login-request/?code=${code}`
      );
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;

      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);

      router.push("/record");
    } catch (error: any) {
      if (error.response) {
        // 요청이 성공했지만 서버가 오류 응답을 보낸 경우
        console.error("오류 응답:", error.response.status, error.response.data);
      } else if (error.request) {
        // 요청이 만들어졌지만 응답을 받지 못한 경우
        console.error("응답 없음:", error.request);
      } else {
        // 요청을 만들 때 문제가 발생한 경우
        console.error("오류:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchAuthData();
  }, []);

  return <div>카카오 소셜로그인 중입니다...</div>;
}

"use client";

import axios from "axios";
import React, { useEffect } from "react";

export default function AuthKakao() {
  useEffect(() => {
    const fetchAuthData = async () => {
      const code = new URL(window.location.href).searchParams.get("code");

      try {
        const response = await axios.post(
          "http://3.36.57.218:8000/accounts/kakao/login-request/",
          { code: code },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;",
            },
          }
        );
        console.log(response.data);
      } catch (error: any) {
        console.error("오류:", error.message);
      }
    };

    fetchAuthData();
  }, []);

  return <div>인가코드 생성</div>;
}

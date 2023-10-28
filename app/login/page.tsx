"use client";

import { useState } from "react";
import AuthInput from "../components/AuthInput";
import AuthBtn from "../components/AuthBtn";
import TitleTxt from "../components/Titletxt";

export default function Login() {
  const [authInp, setAuthInp] = useState({
    email: "",
    password: "",
  });

  const handleAuthInputChange = (e: any) => {
    const { value, name } = e.target;
    setAuthInp({
      ...authInp,
      [name]: value,
    });
  };

  return (
    <div>
      <TitleTxt titleTxt="로그인" />
      <form>
        <AuthInput
          name="email"
          htmlFor="email"
          id="email"
          labelTxt="이메일"
          placeholder="예) welcome@naver.com"
          type="text"
          value={authInp.email}
          onChange={handleAuthInputChange}
        />
        <AuthInput
          name="password"
          htmlFor="password"
          id="password"
          labelTxt="비밀번호"
          placeholder="숫자 포함 8글자 이상 입력해주세요"
          type="password"
          value={authInp.password}
          onChange={handleAuthInputChange}
        />
        <AuthBtn btnTxt={"이메일로 로그인하기"} />
      </form>
      <p className="text-sm text-center mt-8">이메일로 회원가입</p>
      <div className="flex justify-center gap-8 mt-8">
        <img src="/image/kakao.svg" />
        <img src="/image/naver.svg" />
        <img src="/image/google.svg" />
      </div>
    </div>
  );
}

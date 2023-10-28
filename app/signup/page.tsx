"use client";

import { useState } from "react";
import AuthInput from "../components/AuthInput";

export default function SignUp() {
  const [authInp, setAuthInp] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleAuthInputChange = (e: any) => {
    const { value, name } = e.target;
    setAuthInp({
      ...authInp,
      [name]: value,
    });
  };

  return (
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
      <AuthInput
        name="passwordConfirm"
        htmlFor="passwordConfirm"
        id="passwordConfirm"
        labelTxt="비밀번호 확인"
        placeholder="숫자 포함 8글자 이상 입력해주세요"
        type="password"
        value={authInp.passwordConfirm}
        onChange={handleAuthInputChange}
      />
    </form>
  );
}

"use client";

import { useState } from "react";
import AuthInput from "../components/AuthInput";
import AuthBtn from "../components/AuthBtn";
import TitleTxt from "../components/Titletxt";
import ErrorTxt from "../components/ErrorTxt";
import { formValidate } from "../utils/formValidate";
import regex from "../utils/regex";

export default function Login() {
  const [authInp, setAuthInp] = useState({
    email: "",
    password: "",
  });

  // 오류메세지 상태 저장
  const [error, setError] = useState({
    emailErrorTxt: "",
    passwordErrorTxt: "",
  });

  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });

  // pass가 true로 바뀌면 버튼 활성화
  const isFormValid = isValid.email && isValid.password;

  const handleAuthInputChange = (e: any) => {
    // 입력 값 업데이트
    const { value, name } = e.target;
    setAuthInp({
      ...authInp,
      [name]: value,
    });

    // 유효성 검사 및 오류 상태 업데이트
    if (name === "email") {
      const isEmailValid = formValidate(value, regex.EMAIL_CHECK);
      setError((prevErrors) => ({
        ...prevErrors,
        emailErrorTxt: isEmailValid ? "" : "유효하지 않은 이메일 입니다.",
      }));
      setIsValid((prevValid) => ({
        ...prevValid,
        email: isEmailValid,
      }));
    } else if (name === "password") {
      const isPasswordValid = formValidate(value, regex.PASSWORD_CHECK);
      setError((prevErrors) => ({
        ...prevErrors,
        passwordErrorTxt: isPasswordValid
          ? ""
          : "숫자 포함 8자 이상 입력해주세요",
      }));
      setIsValid((prevValid) => ({
        ...prevValid,
        password: isPasswordValid,
      }));
    }
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
        {error.emailErrorTxt && <ErrorTxt errorTxt={error.emailErrorTxt} />}
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
        {error.passwordErrorTxt && (
          <ErrorTxt errorTxt={error.passwordErrorTxt} />
        )}
        <AuthBtn btnTxt={"이메일로 로그인하기"} disabled={!isFormValid} />
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

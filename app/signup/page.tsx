"use client";

import { useState } from "react";
import AuthInput from "../components/AuthInput";
import AuthBtn from "../components/BtnComponents/AuthBtn";
import TitleTxt from "../components/Titletxt";
import SelectAge from "./SelectAge";
import { formValidate } from "../utils/formValidate";
import regex from "../utils/regex";
import ErrorTxt from "../components/ErrorTxt";
import NavLayout from "../components/NavLayout";

export default function SignUp() {
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    ageGroup: "20s",
  });

  // 오류메세지 상태 저장
  const [error, setError] = useState({
    emailErrorTxt: "",
    passwordErrorTxt: "",
    passwordConfirmErrorTxt: "",
    ageGroup: "",
  });

  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
    ageGroup: false,
  });

  const handleAuthFormChange = (e: any) => {
    const { value, name } = e.target;
    setAuthForm({
      ...authForm,
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
    } else if (name === "passwordConfirm") {
      const isPasswordMatch = value === authForm.password;
      setError((prevErrors) => ({
        ...prevErrors,
        passwordConfirmErrorTxt: isPasswordMatch
          ? ""
          : "비밀번호가 일치하지 않습니다..",
      }));
      setIsValid((prevValid) => ({
        ...prevValid,
        passwordConfirm: isPasswordMatch,
      }));
    } else if (name === "ageGroup") {
      const isAgeGroupSelected = value.trim() !== "";
      setIsValid((prevValid) => ({
        ...prevValid,
        ageGroup: isAgeGroupSelected,
      }));
    }
  };

  // pass가 true로 바뀌면 버튼 활성화
  const isFormValid =
    isValid.email &&
    isValid.password &&
    isValid.passwordConfirm &&
    isValid.ageGroup;

  return (
    <>
      <TitleTxt titleTxt="회원가입" />
      <form
        onSubmit={() => {
          console.log("성공");
        }}
      >
        <AuthInput
          name="email"
          htmlFor="email"
          id="email"
          labelTxt="이메일"
          placeholder="예) welcome@naver.com"
          type="text"
          value={authForm.email}
          onChange={handleAuthFormChange}
        />
        {error.emailErrorTxt && <ErrorTxt errorTxt={error.emailErrorTxt} />}
        <AuthInput
          name="password"
          htmlFor="password"
          id="password"
          labelTxt="비밀번호"
          placeholder="숫자 포함 8글자 이상 입력해주세요"
          type="password"
          value={authForm.password}
          onChange={handleAuthFormChange}
        />
        {error.passwordErrorTxt && (
          <ErrorTxt errorTxt={error.passwordErrorTxt} />
        )}
        <AuthInput
          name="passwordConfirm"
          htmlFor="passwordConfirm"
          id="passwordConfirm"
          labelTxt="비밀번호 확인"
          placeholder="숫자 포함 8글자 이상 입력해주세요"
          type="password"
          value={authForm.passwordConfirm}
          onChange={handleAuthFormChange}
        />
        {error.passwordConfirmErrorTxt && (
          <ErrorTxt errorTxt={error.passwordConfirmErrorTxt} />
        )}
        <SelectAge onChange={handleAuthFormChange} />
        <AuthBtn btnTxt="회원가입" disabled={!isFormValid} />
      </form>
    </>
  );
}

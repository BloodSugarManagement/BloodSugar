"use client";

import { ChangeEvent, useEffect, useState } from "react";
import ChartCategory from "./ChartCategory";
import ChartGraph from "./ChartGraph";

export default function ChartForm() {
  const [category, setCategory] = useState({
    날짜: "7일",
    시간: "공복",
  });

  const dateCategory = ["7일", "31일"];
  const timeCategory = ["공복", "아침", "점심", "저녁"];

  const checkHandler = (event: ChangeEvent<HTMLFormElement>) => {
    setCategory({
      ...category,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    // 최초 화면 접속 시 카테고리 선택되게 하기
    const date = document.getElementById(category.날짜) as HTMLInputElement;
    const time = document.getElementById(category.시간) as HTMLInputElement;

    date.checked = true;
    time.checked = true;
  });

  return (
    <form className="w-full h-full" onChange={checkHandler}>
      <ul className="flex gap-2 w-full justify-end my-2.5 pr-5">
        {dateCategory.map((category) => {
          return (
            <ChartCategory
              key={category}
              id={category}
              name="날짜"
              text={category + " 보기"}
            />
          );
        })}
      </ul>
      <ChartGraph XKey={category.날짜} YKey={category.시간} />
      <ul className="flex gap-2 w-full justify-center my-9">
        {timeCategory.map((category) => {
          return (
            <ChartCategory
              key={category}
              id={category}
              name="시간"
              text={category}
            />
          );
        })}
      </ul>
      <img
        src="/image/chartRecommended.jpg"
        alt="혈당의 정상 수치 및 조절 목표를 설명하는 표입니다. 공복일 때의 정상 혈당 수치는 70~100 mg/dL 식후 2시간 이후부터의 정상 혈당 수치는 90~140 mg/dL 입니다. 공복일 때의 혈당 수치는 80~130 mg/dL를, 식후 2시간 이후부터의 혈당 수치는 180 mg/dL 이하로 조절하는 것을 목표로 합니다."
      />
    </form>
  );
}

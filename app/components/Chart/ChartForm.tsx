"use client";

import { ChangeEvent, useEffect, useState } from "react";
import ChartCategory from "./ChartCategory";
import ChartGraph from "./ChartGraph";

/* 상수 정의 */
const apiUrl = "http://52.78.93.9:8000/api/management/aggregate/";
const dateCategory = ["7일", "31일"];
const timeCategory = ["공복", "아침", "점심", "저녁"];
const dateFilter = {
  "7일": "week",
  "31일": "month",
};
const timeFilter = {
  공복: ["empty_stomach"],
  아침: ["before_morning", "after_morning"],
  점심: ["before_lunch", "after_lunch"],
  저녁: ["before_evening", "after_evening"],
};
///

export default function ChartForm() {
  /* 상태 정의 */
  const [category, setCategory] = useState<Category>({
    날짜: "7일",
    시간: "공복",
  });
  const [data, setData] = useState<BloodSugarData[]>([]);
  ///

  const fetchData = async () => {
    const token = localStorage.getItem("access");

    if (token) {
      const res = await fetch(`${apiUrl}${dateFilter[category.날짜]}/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const converted = (await res.json()) as unknown as BloodSugarData[];
        const sorted = converted.sort(
          (a, b) => +new Date(a["created_at"]) - +new Date(b["created_at"])
        );
        setData(sorted);
      } else {
        alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
        if (localStorage) {
          localStorage.removeItem("access");
        }
        window.location.assign("login");
      }
    } else {
      alert("로그인이 필요한 서비스입니다.");
      window.location.assign("login");
    }
  };

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
  }, []);

  useEffect(() => {
    // 데이타 fetching
    fetchData();
  }, [category.날짜]);

  return (
    <form className="w-full" onChange={checkHandler}>
      <ul className="flex gap-2 w-full justify-end mb-6 pr-5 flex-wrap">
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
      <ChartGraph data={data} YKey={timeFilter[category.시간]} />
      <ul className="flex gap-2 w-full justify-center my-9 flex-wrap">
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
    </form>
  );
}

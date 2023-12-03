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
  공복: "empty_stomach",
  아침: "morning",
  점심: "lunch",
  저녁: "evening",
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
    // const token = localStorage.getItem('token');
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxNjA0OTY0LCJpYXQiOjE3MDE1OTc3NjQsImp0aSI6ImNiZTA3NWQ0MTNhMDQ4NTA4MDkxODY1YmMwNDllMzQzIiwidXNlcl9pZCI6OX0.jYkq6bAtKbk3L0kH-wNxP-1ghybvFbj5OfOR00qnyOY";

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
      }
    } else {
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

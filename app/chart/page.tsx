"use client";

import { useState } from "react";
import ChartCategory from "../components/ChartCategory";

export default function Chart() {
  const [date, setDate] = useState<string>("7일");
  const [time, setTime] = useState<string>("공복");

  return (
    <section>
      <ul className="flex gap-2">
        <ChartCategory name="7일 보기" setter={setDate} className="px-2 py-1" />
        <ChartCategory
          name="31일 보기"
          setter={setDate}
          className="px-2 py-1"
        />
      </ul>
      <h2 className="text-xl font-extrabold">혈당 차트</h2>
      날짜 : {date} / 시간 : {time}
      <ul className="flex gap-2">
        <ChartCategory name="공복" setter={setTime} className="px-6 py-1" />
        <ChartCategory name="아침" setter={setTime} className="px-6 py-1" />
        <ChartCategory name="점심" setter={setTime} className="px-6 py-1" />
        <ChartCategory name="저녁" setter={setTime} className="px-6 py-1" />
      </ul>
    </section>
  );
}

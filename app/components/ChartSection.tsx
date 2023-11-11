"use client";

import { useState } from "react";
import ChartCategory from "./ChartCategory";
import ChartGraph from "./ChartGraph";

export default function ChartSection() {
  const [date, setDate] = useState<string>("7일");
  const [time, setTime] = useState<string>("공복");

  return (
    <section className="h-full">
      <ul className="flex justify-end gap-2">
        <ChartCategory name="7일 보기" setter={setDate} className="px-2 py-1" />
        <ChartCategory
          name="31일 보기"
          setter={setDate}
          className="px-2 py-1"
        />
      </ul>
      <ChartGraph />
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

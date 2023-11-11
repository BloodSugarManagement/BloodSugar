"use client";
import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function MonthlyCalender() {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  };

  // 현재 월의 시작요일
  const curMonthStartDay = new Date(today.year, today.month, 1).getDay();
  // 현재 월의 마지막 날짜
  const curMonthLastDate = new Date(today.year, today.month + 1, 0);
  // 이전 월의 마지막 날짜
  const prevMonthLastDate = new Date(today.year, today.month, 0);
  // 다음 월의 시작요일
  const nextMonthStartDate = new Date(today.year, today.month + 1, 1);

  const days: Date[] = [];

  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const [selectedDay, setSelectedDay] = useState();

  return (
    <section className="bg-white p-2.5">
      {/*<span>
        {curMonthStartDay +
          " " +
          curMonthLastDate +
          " " +
          prevMonthLastDate +
          " " +
          nextMonthStartDate}
      </span>*/}
      <div className="flex items-center justify-between p-4">
        <button>
          <GrPrevious />
        </button>
        <span className="text-sm">{selectedYear + ". " + selectedMonth}</span>
        <button>
          <GrNext />
        </button>
      </div>
      <div className="grid grid-cols-7 py-2.5 px-4 text-center border-y border-gray-300">
        {dayOfWeek.map((day, index) => (
          <div key={index} className={`${day === "일" ? "text-red-600" : ""}`}>
            {day}
          </div>
        ))}
        {}
      </div>
    </section>
  );
}

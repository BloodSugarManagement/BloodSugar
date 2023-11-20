"use client";
import { useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function MonthlyCalender() {
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedYear, setSelectedYear] = useState(currentMonth.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentMonth.getMonth());

  const buildCalendarDays = () => {
    const curMonthStartDay = new Date(selectedYear, selectedMonth, 1).getDay();
    const curMonth = new Date(selectedYear, selectedMonth + 1, 0);
    const curMonthEndate = curMonth.getDate();

    const prevMonth = new Date(selectedYear, selectedMonth, 0);
    const prevMonthEndDate = prevMonth.getDate();

    const days: Date[] = Array.from({ length: curMonthStartDay }, (_, i) => {
      return new Date(selectedYear, selectedMonth - 1, prevMonthEndDate - i);
    }).reverse();

    days.push(
      ...Array.from({ length: curMonthEndate }, (_, i) => {
        return new Date(selectedYear, selectedMonth, i + 1);
      })
    );

    const remainDays = 7 - (days.length % 7);
    if (remainDays < 7) {
      days.push(
        ...Array.from({ length: remainDays }, (_, i) => {
          return new Date(selectedYear, selectedMonth + 1, i + 1);
        })
      );
    }

    return days;
  };

  const calenderData = buildCalendarDays();

  const movePrevMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        currentMonth.getDate()
      )
    );
  };
  const moveNextMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        currentMonth.getDate()
      )
    );
  };

  useEffect(() => {
    setSelectedMonth(currentMonth.getMonth());
  }, [currentMonth]);

  return (
    <section className="bg-white p-2.5">
      <div className="flex items-center justify-between p-4">
        <button onClick={movePrevMonth}>
          <GrPrevious />
        </button>
        <span className="text-sm">
          {currentMonth.getFullYear()}. {currentMonth.getMonth() + 1}
        </span>
        <button onClick={moveNextMonth}>
          <GrNext />
        </button>
      </div>
      <div className="grid grid-cols-7 py-2.5 px-4 text-center border-y border-gray-300">
        {dayOfWeek.map((day, index) => (
          <div key={index} className={`${day === "일" ? "text-red-600" : ""}`}>
            {day}
          </div>
        ))}
        {calenderData.map((date, index) => {
          return (
            <div
              key={index}
              className={`${
                date.getMonth() !== currentMonth.getMonth()
                  ? "text-gray-400"
                  : ""
              }`}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </section>
  );
}

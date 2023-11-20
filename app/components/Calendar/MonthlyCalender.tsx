"use client";
import { useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import RecordTab from "../InfoTab/RecordTab";
import SugarBloodHistory from "../InfoTab/SugarBloodHistory";
import MemoHistory from "../InfoTab/MemoHistory";

export default function MonthlyCalender() {
  const [currentTab, setTab] = useState(0);

  const menuArr = [
    { name: "혈당기록", content: <SugarBloodHistory /> },
    { name: "메모", content: <MemoHistory /> },
  ];

  const selectTabHandler = (tabIndex: number) => {
    setTab(tabIndex);
  };

  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const date = ("0" + today.getDate()).slice(-2);

  var dateString = year + "-" + month + "-" + date;

  const buildCalendarDays = () => {
    const selectedDate = {
      year: currentMonth.getFullYear(),
      month: currentMonth.getMonth(),
    };
    const curMonthStartDay = new Date(
      selectedDate.year,
      selectedDate.month,
      1
    ).getDay();
    const curMonth = new Date(selectedDate.year, selectedDate.month + 1, 0);
    const curMonthEndate = curMonth.getDate();

    const prevMonth = new Date(selectedDate.year, selectedDate.month, 0);
    const prevMonthEndDate = prevMonth.getDate();

    const days: Date[] = Array.from({ length: curMonthStartDay }, (_, i) => {
      return new Date(
        selectedDate.year,
        selectedDate.month - 1,
        prevMonthEndDate - i
      );
    }).reverse();

    days.push(
      ...Array.from({ length: curMonthEndate }, (_, i) => {
        return new Date(selectedDate.year, selectedDate.month, i + 1);
      })
    );

    const remainDays = 7 - (days.length % 7);
    if (remainDays < 7) {
      days.push(
        ...Array.from({ length: remainDays }, (_, i) => {
          return new Date(selectedDate.year, selectedDate.month + 1, i + 1);
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

  return (
    <div className="bg-white p-2.5">
      <section className="flex items-center justify-between p-4">
        <button onClick={movePrevMonth}>
          <GrPrevious />
        </button>
        <span className="text-base">
          {currentMonth.getFullYear()}.{" "}
          {("0" + (currentMonth.getMonth() + 1)).slice(-2)}
        </span>
        <button onClick={moveNextMonth}>
          <GrNext />
        </button>
      </section>
      <div className="grid grid-cols-7 py-2.5 px-4 font-light text-center border-y border-gray-300">
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
                  ? "text-gray-300"
                  : ""
              }`}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
      <span>{dateString}</span>
      <section className="flex flex-col mt-3">
        <div className="flex">
          {menuArr.map((tab, index) => {
            return (
              <div
                key={index}
                onClick={() => selectTabHandler(index)}
                className={`flex-1 py-2 h-10 text-center cursor-pointer border-b-4 ${
                  currentTab === index ? "border-orange-600 " : "border-inherit"
                }`}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <div>{menuArr[currentTab].content}</div>
      </section>
    </div>
  );
}

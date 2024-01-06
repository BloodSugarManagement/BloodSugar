"use client";
import React, { useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { BsPlusCircleFill } from "react-icons/bs";
import BloodSugarHistory from "../InfoTab/BloodSugarHistory";
import MemoHistory from "../InfoTab/MemoHistory";
import BloodSugarModal from "../Modal/BloodSugarModal";
import { authApiService } from "../../services/apiService";

const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
const today = new Date();

interface BloodSugarData {
  [key: string]: number;
}

export default function Monthlycalendar() {
  const [currentTab, setTab] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isData, setIsData] = useState(false);
  const [bloodSugarData, setBloodSugarData] = useState<BloodSugarData>({
    after_evening: 0,
    after_lunch: 0,
    after_morning: 0,
    before_evening: 0,
    before_lunch: 0,
    before_morning: 0,
    empty_stomach: 0,
  });
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(today);
  const [calendarData, setCalendarData] = useState<Date[]>([]);

  const dateFormatStr = (selectedDate: Date) => {
    const year = selectedDate.getFullYear();
    const month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);
    const date = ("0" + selectedDate.getDate()).slice(-2);
    return year + "-" + month + "-" + date;
  };

  const selectedDay = dateFormatStr(selectedDate).split("-");

  const buildCalendarDays = function () {
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

  useEffect(() => {
    setCalendarData(buildCalendarDays());
  }, [currentMonth]);

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

  // 날짜별 혈당 보기
  const selectDate = (selectDate: Date) => {
    setSelectedDate(selectDate);
  };

  // 탭
  const tabArr = [
    {
      name: "혈당기록",
      content: (
        <BloodSugarHistory isData={isData} bloodSugarData={bloodSugarData} />
      ),
    },
    {
      name: "메모",
      content: <MemoHistory dateStr={dateFormatStr(selectedDate)} />,
    },
  ];

  const selectTabHandler = (tabIndex: number, tabName: string) => {
    setTab(tabIndex);
    if (tabName === "메모") {
    }
  };

  // 혈당 데이터조회
  const getBloodSugarData = async () => {
    try {
      const response = await authApiService.get(
        `/api/management/${selectedDay[0]}/${selectedDay[1]}/${selectedDay[2]}`
      );

      const res = response.data;
      if (
        res.after_evening === 0 &&
        res.after_lunch === 0 &&
        res.after_morning === 0 &&
        res.before_evening === 0 &&
        res.before_lunch === 0 &&
        res.before_morning === 0 &&
        res.empty_stomach === 0
      ) {
        setIsData(false);
        setBloodSugarData({ ...res });
      } else {
        setIsData(true);
        setBloodSugarData({ ...res });
      }
    } catch (error: any) {
      console.error("데이터 조회 불가: ", error.message);
    }
  };

  useEffect(() => {
    getBloodSugarData();
  }, [selectedDate]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="bg-white p-2.5">
      <section className="h-[300px]">
        <nav className="flex items-center justify-between py-2.5 px-6 h-1/5">
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
        </nav>
        <div className="grid grid-cols-7 justify-items-center	py-2.5 px-4 h-4/5 font-light text-center border-y border-gray-300">
          {dayOfWeek.map((day, index) => (
            <div
              key={index}
              className={`flex justify-center items-center w-full h-full ${
                day === "일" ? "text-red-600" : ""
              }`}
            >
              {day}
            </div>
          ))}
          {calendarData.map((date, index) => {
            const isDateEqual =
              date.getFullYear() === today.getFullYear() &&
              date.getMonth() === today.getMonth() &&
              date.getDate() === today.getDate();

            const isNowMonth = date.getMonth() === currentMonth.getMonth();

            return (
              <div
                key={index}
                className={`flex justify-center items-center w-[37px] h-full ${
                  !isNowMonth ? "text-gray-300" : "cursor-pointer"
                } ${isDateEqual ? "rounded-full bg-[#F5F0D4]" : ""}`}
                onClick={!isNowMonth ? undefined : () => selectDate(date)}
              >
                {date.getDate()}
              </div>
            );
          })}
        </div>
      </section>
      <div className="flex justify-between items-center p-2 h-[50px]">
        <span className="inline-block">{dateFormatStr(selectedDate)}</span>
        <button onClick={() => openModal()}>
          <BsPlusCircleFill size="24" className="hover:animate-bounce" />
        </button>
      </div>
      <section className="flex flex-col">
        <div className="flex">
          {tabArr.map((tab, index) => {
            return (
              <div
                key={index}
                onClick={() => selectTabHandler(index, tab.name)}
                className={`flex-1 py-2 h-10 text-center cursor-pointer border-b-4 ${
                  currentTab === index
                    ? "text-[#F47171] border-[#F47171]"
                    : "border-inherit"
                }`}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <div>{tabArr[currentTab].content}</div>
      </section>
      <BloodSugarModal
        isOpen={modalIsOpen}
        dateStr={dateFormatStr(selectedDate)}
        setIsData={setIsData}
        bloodSugarData={bloodSugarData}
        setBloodSugarData={setBloodSugarData}
        closeModal={closeModal}
      />
    </div>
  );
}

import React from "react";

export default function SugarBloodModal() {
  const timeCategory = ["공복", "아침", "점심", "저녁"];

  return (
    <article className="flex flex-col justify items-center p-2.5 w-[50vh] h-[50vh] m-auto bg-white rounded-md shadow-lg">
      <h2 className="hidden">혈당기록 모달창</h2>
      <div className="flex justify-around w-full">
        <span>식전</span>
        <span>식후</span>
      </div>
      {timeCategory.map((category) => {
        return (
          <div className="flex justify-around w-full">
            <span className="mr-2 text-slate-700">{category}</span>
            <input
              //  type=text로 바꾸고 숫자 유효성 검사하기
              type="number"
              className="w-16 h-8 border border-gray-300 rounded-md"
            ></input>
            <input
              type="number"
              className="w-16 h-8 border border-gray-300 rounded-md"
            ></input>
          </div>
        );
      })}
      <button className="p-2.5 mt-5 w-full rounded-md bg-[#F5F0D4]">
        저장
      </button>
    </article>
  );
}

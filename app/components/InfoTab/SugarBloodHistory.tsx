import React from "react";

export default function sugarBloodHistory() {
  return (
    <div className="relative min-h-[300px] my-3 rounded-lg bg-[#F5F0D4] text-center">
      {/* 선택된 날짜에 혈당기록이 하나도 없다면 */}
      <p className="w-10/12 h-5/6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        생성된 혈당 기록이 없습니다. <br />
        위의 + 버튼을 눌러 혈당을 기록하세요 !
      </p>
    </div>
  );
}

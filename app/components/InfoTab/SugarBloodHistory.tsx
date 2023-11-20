import React from "react";

export default function sugarBloodHistory() {
  return (
    <div className="min-h-[200px] my-3 rounded-lg bg-[#F5F0D4] text-center">
      {/* 선택된 날짜에 혈당기록이 하나도 없다면 */}
      <p>
        생성된 혈당 기록이 없습니다. <br />위 버튼을 눌러 혈당을 기록하세요 !
      </p>
    </div>
  );
}

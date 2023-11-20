import React from "react";

export default function memoHistory() {
  return (
    <div className="min-h-[200px] my-3 rounded-lg bg-[#F5F0D4] text-center">
      {/* 선택된 날짜에 혈당기록이 하나도 없다면 */}
      <p>오늘은 초콜릿을 5개나 먹어버렸다!! ㅠㅠ</p>
    </div>
  );
}

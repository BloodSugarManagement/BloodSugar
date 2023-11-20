import MonthlyCalender from "../components/Calendar/MonthlyCalender";
import Titletxt from "../components/Titletxt";

export default function Record() {
  return (
    <div className="w-80 p-2.5 flex flex-col">
      <Titletxt titleTxt="혈당 기록" />
      <MonthlyCalender />
      <section className="mt-2">
        <div className="flex">
          <div className="flex-1 py-2 h-10 border-b-2 border-orange-600 text-center cursor-pointer">
            혈당기록
          </div>
          <div className="flex-1 py-2 h-10 border-b-2 border-inherit text-center cursor-pointer">
            메모
          </div>
        </div>
        <div>혈당기록 조회,기록 화면</div>
        <div className="hidden">메모 조회, 기록화면</div>
      </section>
    </div>
  );
}

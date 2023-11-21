import MonthlyCalender from "../components/Calendar/MonthlyCalender";
import Titletxt from "../components/Titletxt";

export default function Record() {
  return (
    // w88-352px, 22rem
    <div className="w-88 h-fit p-2.5 flex flex-col">
      <Titletxt titleTxt="혈당 기록" />
      <MonthlyCalender />
    </div>
  );
}

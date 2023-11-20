import MonthlyCalender from "../components/Calendar/MonthlyCalender";
import Titletxt from "../components/Titletxt";

export default function Record() {
  return (
    <div className="w-80 p-2.5 flex flex-col">
      <Titletxt titleTxt="혈당 기록" />
      <MonthlyCalender />
    </div>
  );
}

import MonthlyCalendar from "../components/Calendar/MonthlyCalendar";
import NavLayout from "../components/NavLayout";
import Titletxt from "../components/Titletxt";

export default function Record() {
  return (
    <NavLayout>
      {/*<div className="w-88 h-fit p-2.5 flex flex-col">*/}
      <Titletxt titleTxt="혈당 기록" />
      <MonthlyCalendar />
      {/*</div>*/}
    </NavLayout>
  );
}

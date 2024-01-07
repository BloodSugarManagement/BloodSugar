import LogOutBtn from "../components/BtnComponents/LogOutBtn";
import MonthlyCalendar from "../components/Calendar/MonthlyCalendar";
import NavLayout from "../components/NavLayout";
import Titletxt from "../components/Titletxt";

export default function Record() {
  return (
    <NavLayout>
      <LogOutBtn />
      <Titletxt titleTxt="혈당 기록" />
      <MonthlyCalendar />
    </NavLayout>
  );
}

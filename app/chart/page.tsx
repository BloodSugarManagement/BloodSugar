import NavLayout from "../components/NavLayout";
import ChartForm from "../components/Chart/ChartForm";
import TitleTxt from "../components/Titletxt";

export default function Chart() {
  return (
    <NavLayout>
      <TitleTxt titleTxt="혈당 차트" />
      <ChartForm />
      <img
        src="/image/chartRecommended.jpg"
        alt="혈당의 정상 수치 및 조절 목표를 설명하는 표입니다. 공복일 때의 정상 혈당 수치는 70~100 mg/dL 식후 2시간 이후부터의 정상 혈당 수치는 90~140 mg/dL 입니다. 공복일 때의 혈당 수치는 80~130 mg/dL를, 식후 2시간 이후부터의 혈당 수치는 180 mg/dL 이하로 조절하는 것을 목표로 합니다."
      />
    </NavLayout>
  );
}

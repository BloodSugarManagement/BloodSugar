import NavLayout from "../components/NavLayout";
import ChartForm from "../components/Chart/ChartForm";

export default function Chart() {
  return (
    <NavLayout>
      <h2 className="text-xl font-extrabold text-left w-full indent-3.5">
        혈당 차트
      </h2>
      <ChartForm />
    </NavLayout>
  );
}

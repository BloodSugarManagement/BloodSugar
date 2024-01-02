interface BloodSugarData {
  is_empty_stomach_warning?: boolean;
  is_morning_warning?: boolean;
  is_lunch_warning?: boolean;
  is_evening_warning?: boolean;
  empty_stomach: number;
  morning: number;
  lunch: number;
  evening: number;
  created_at: string;
}

interface Category {
  날짜: "7일" | "31일";
  시간: "공복" | "아침" | "점심" | "저녁";
}

interface GraphProps {
  data: BloodSugarData[];
  YKey: string[];
}

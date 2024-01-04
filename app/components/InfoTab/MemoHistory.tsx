import { authApiService } from "@/app/services/apiService";
import React, { useEffect, useState } from "react";

interface MemoHistoryProps {
  dateStr: string;
}

export default function memoHistory({ dateStr }: MemoHistoryProps) {
  const selectedDay = dateStr.split("-");
  const [memoData, setMemoData] = useState<string | undefined>();

  useEffect(() => {
    const fetchMemoData = async () => {
      try {
        if (dateStr) {
          const response = await authApiService.get(
            `/api/management/${selectedDay[0]}/${selectedDay[1]}/${selectedDay[2]}/feedback/`
          );

          if (response.status === 200) {
            setMemoData(response.data.content);
          }
        }
      } catch (error: any) {
        console.error("메모를 불러오지 못했습니다:", error.message);
        setMemoData(null);
      }
    };

    fetchMemoData();
  }, [dateStr]);

  const handleMemoChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMemoValue(event.target.value);
  };

  return (
    <form action="handleMemoSubmit">
      <textarea
        onChange={handleMemoChange}
        name="memo"
        value={memoData}
        className="min-h-[200px] my-3 rounded-lg bg-[#F5F0D4] text-center"
      ></textarea>
    </form>
  );
}

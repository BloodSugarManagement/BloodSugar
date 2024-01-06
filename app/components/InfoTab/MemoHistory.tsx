import { authApiService } from "@/app/services/apiService";
import React, { ChangeEvent, useEffect, useState } from "react";

interface MemoHistoryProps {
  dateStr: string;
}

export default function memoHistory({ dateStr }: MemoHistoryProps) {
  const selectedDay = dateStr.split("-");
  const [memoValue, setMemoValue] = useState<string>("");
  //const [memoData];

  const getMemoData = async () => {
    try {
      if (dateStr) {
        const response = await authApiService.get(
          `/api/management/${selectedDay[0]}/${selectedDay[1]}/${selectedDay[2]}/feedback/`
        );

        if (response.status === 200) {
          setMemoValue(response.data.content);
        }
      }
    } catch (error: any) {
      console.error("메모를 불러오지 못했습니다:", error.message);
    }
  };

  useEffect(() => {
    getMemoData();
  }, []);

  const handleMemoSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await authApiService.put(
        `/api/management/${selectedDay[0]}/${selectedDay[1]}/${selectedDay[2]}/feedback/`,
        { content: memoValue }
      );
      if (response.status === 200) {
        await getMemoData();
      }
    } catch (error: any) {
      console.log("메모를 등록하지 못했습니다: ", error.message);
    }
  };

  const handleMemoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setMemoValue(value);
  };

  return (
    <div className="">
      <form onSubmit={handleMemoSubmit}>
        <textarea
          onChange={(e) => handleMemoChange(e)}
          name="content"
          value={memoValue || ""}
          className="w-full min-h-[200px] my-3 mb-1 p-3 rounded-lg bg-[#F5F0D4] resize-none"
        ></textarea>
        <button className="p-2.5 w-full rounded-lg bg-[#F5F0D4] shadow-sm">
          저장
        </button>
      </form>
    </div>
  );
}

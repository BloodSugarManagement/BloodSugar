import React, { useEffect, useState } from "react";

interface MemoHistoryProps {
  dateStr: string;
}

export default function memoHistory({ dateStr }: MemoHistoryProps) {
  const tokenInfo = localStorage.getItem("token");
  const selectedDay = dateStr.split("-");
  const [memoData, setMemoData] = useState<string | null>(null);

  useEffect(() => {
    console.log("memo");
    const fetchMemoData = async () => {
      try {
        if (dateStr) {
          const res = await fetch(
            `http://52.78.93.9:8000/api/management/${selectedDay[0]}/${selectedDay[1]}/${selectedDay[2]}/feedback/`,
            {
              method: "GET",
              headers: {
                authorization: `Bearer ${tokenInfo}`,
              },
            }
          );

          if (res.ok) {
            const data = await res.json();
            setMemoData(data.memo);
          } else {
            console.error("Failed to fetch memo data", res.status);
            setMemoData(null);
          }
        }
      } catch (error) {
        console.error("An error occurred while fetching memo data:", error);
        setMemoData(null);
      }
    };

    fetchMemoData();
  }, [dateStr, tokenInfo]);

  return (
    <div className="min-h-[200px] my-3 rounded-lg bg-[#F5F0D4] text-center">
      {memoData ? <p>{memoData}</p> : <p>메모가 없습니다.</p>}
    </div>
  );
}

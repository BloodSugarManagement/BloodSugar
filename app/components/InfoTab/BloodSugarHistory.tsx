import React from "react";

interface BloodSugarData {
  [key: string]: number | undefined;
}
interface bsTabProps {
  isData: boolean;
  data: BloodSugarData;
}

export default function BloodSugarHistory({ isData, data }: bsTabProps) {
  const timeCategory = [
    { name: "아침", engName: "morning", imgSrc: "image/sunrise-icon.png" },
    { name: "점심", engName: "lunch", imgSrc: "image/sun-icon.png" },
    { name: "저녁", engName: "evening", imgSrc: "image/moon-icon.png" },
  ];

  return (
    <section className="grid p-2.5 relative min-h-[300px] my-3 rounded-lg bg-[#F5F0D4] text-center">
      {isData ? (
        <>
          <div className="w-full p-2.5 border-b-2 border-gray">
            <span>식전</span>
            <span>식후</span>
          </div>
          <div className="w-full">
            {timeCategory.map((category) => {
              const beforeKey = `before_${category.engName}`;
              const afterKey = `after_${category.engName}`;

              return (
                <div key={category.engName} className="block">
                  <img
                    src={category.imgSrc}
                    alt={category.name}
                    className="w-[100px] h-[100px] inline"
                  />
                  <span>{" " + category.name}</span>
                  <span>{data[beforeKey]}</span> mg/dL
                  <span>{data[afterKey]}</span> mg/dL
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p className="w-10/12 h-5/6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          생성된 혈당 기록이 없습니다. <br />
          위의 + 버튼을 눌러 혈당을 기록하세요 !
        </p>
      )}
    </section>
  );
}

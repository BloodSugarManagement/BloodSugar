import { authApiService } from "../../services/apiService";
import { useEffect, useState } from "react";

interface BloodSugarData {
  [key: string]: number;
}

interface modalProps {
  isOpen: boolean;
  dateStr: string;
  bloodSugarData: BloodSugarData;
  setBloodSugarData: React.Dispatch<React.SetStateAction<BloodSugarData>>;
  closeModal(): void;
}

const timeCategory = [
  { name: "아침", engName: "morning", imgSrc: "image/sunrise-icon.png" },
  { name: "점심", engName: "lunch", imgSrc: "image/sun-icon.png" },
  { name: "저녁", engName: "evening", imgSrc: "image/moon-icon.png" },
];

export default function BloodSugarModal({
  isOpen,
  dateStr,
  bloodSugarData,
  setBloodSugarData,
  closeModal,
}: modalProps) {
  const selectedDay = dateStr.split("-");
  const [updatedBloodSugarData, setUpdatedBloodSugarData] =
    useState<BloodSugarData>(bloodSugarData);

  useEffect(() => {
    setUpdatedBloodSugarData(bloodSugarData);
  }, [bloodSugarData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const { value } = e.target;
    setUpdatedBloodSugarData((prevData) => ({
      ...prevData,
      [key]: parseFloat(value),
    }));
  };

  // 혈당 데이터 등록
  const handleBloodDataSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await authApiService.put(
        `/api/management/${selectedDay[0]}/${selectedDay[1]}/${selectedDay[2]}/`,
        updatedBloodSugarData
      );

      if (response.status === 200) {
        setBloodSugarData(updatedBloodSugarData);
        closeModal();
      }
    } catch (error: any) {
      console.log("데이터를 등록할 수 없습니다: ", error.message);
    }
  };

  return (
    <div
      className={`${
        isOpen ? "visible" : "hidden"
      } fixed inset-0 w-full h-full z-50 bg-black bg-opacity-70 animate-fadeIn`}
    >
      <article
        className="absolute inset-0 p-2.5 w-[30vw] h-[30vh] m-auto bg-white rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="hidden">혈당기록 모달</h2>
        <button
          className="absolute flex justify-center items-center -right-3 -top-3 w-10 h-10 rounded-full bg-white shadow-md text-center"
          onClick={closeModal}
        >
          X
        </button>
        <form onSubmit={handleBloodDataSubmit} className="w-full h-full">
          <table className="w-full h-full">
            <thead className="border-b border-b-inherit">
              <tr>
                <th></th>
                <th>식전</th>
                <th>식후</th>
              </tr>
            </thead>
            <tbody>
              {timeCategory.map((category) => {
                const beforeKey = `before_${category.engName}`;
                const afterKey = `after_${category.engName}`;

                return (
                  <tr key={category.engName}>
                    <th>{category.name}</th>
                    <th className="font-normal text-slate-500">
                      <input
                        type="number"
                        name={beforeKey}
                        value={updatedBloodSugarData[beforeKey]}
                        onChange={(e) => handleInputChange(e, beforeKey)}
                        className="w-16 h-8 p-1 border border-gray-300 rounded-md"
                      ></input>{" "}
                      mg/dL
                    </th>
                    <th className="font-normal text-slate-500">
                      <input
                        type="number"
                        name={afterKey}
                        value={updatedBloodSugarData[afterKey]}
                        onChange={(e) => handleInputChange(e, afterKey)}
                        className="w-16 h-8 p-1 border border-gray-300 rounded-md"
                      ></input>{" "}
                      mg/dL
                    </th>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={3}>
                  <button className="p-2.5 w-full rounded-xl bg-[#F5F0D4] shadow-lg">
                    저장
                  </button>
                </th>
              </tr>
            </tfoot>
          </table>
        </form>
      </article>
    </div>
  );
}

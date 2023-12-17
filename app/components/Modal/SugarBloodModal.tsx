import React from "react";

interface propsType {
  isOpen: boolean;
  closeModal(): void;
}

export default function SugarBloodModal({ isOpen, closeModal }: propsType) {
  const timeCategory = ["공복", "아침", "점심", "저녁"];

  return (
    <div
      className={`${
        isOpen ? "visible" : "hidden"
      } fixed inset-0 w-full h-full z-50 bg-black bg-opacity-70 animate-fadeIn`}
      onClick={closeModal}
    >
      <article
        className="absolute inset-0 p-2.5 w-[30vw] h-[40vh] m-auto bg-white rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="hidden">혈당기록 모달</h2>
        <button
          className="absolute flex justify-center items-center -right-3 -top-3 w-10 h-10 rounded-full bg-white shadow-md text-center"
          onClick={closeModal}
        >
          X
        </button>
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
              return (
                <tr>
                  <th>{category}</th>
                  <th className="font-normal text-slate-500">
                    <input
                      type="number"
                      className="w-16 h-8 border border-gray-300 rounded-md"
                    ></input>{" "}
                    mg/dL
                  </th>
                  <th className="font-normal text-slate-500">
                    <input
                      type="number"
                      className="w-16 h-8 border border-gray-300 rounded-md"
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
      </article>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (!loading && isLogin) router.push("/record");
      else if (!loading && !isLogin) router.push("/login");
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <img
        className="h-2/4 aspect-square"
        src="/image/splashLogo.jpg"
        alt="로고입니다. 데이터를 불러오는 중일 때 나타납니다."
      />
      <h1 className="text-center text-xl font-extrabold">혈당 관리</h1>
    </div>
  );
}

"use client";
import { apiService } from "@/app/services/apiService";
import { useRouter } from "next/navigation";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function LogOutBtn() {
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      const response = await apiService.post("/accounts/logout/");
      if (response.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        router.push("/login");
      }
    } catch (error: any) {
      console.log("로그아웃에 실패했습니다: " + error.message);
    }
  };

  return (
    <div className="flex justify-end">
      <button type="button" onClick={handleLogOut} className="p-3">
        <RiLogoutBoxRLine size="30" />
      </button>
    </div>
  );
}

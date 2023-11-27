import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const fonts = Noto_Sans_KR({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "혈당관리 앱",
  description: "매일 혈당을 기록하고 관리할 수 있는 앱입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`w-screen h-screen ${fonts.className}`}>
        <main className="w-full h-full flex justify-center">
          <div className="w-full h-full max-w-screen-md shadow-lg gray-500/50">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

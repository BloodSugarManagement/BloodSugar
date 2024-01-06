import LogOutBtn from "./BtnComponents/LogOutBtn";
import NavBar from "./NavBar";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col">
      <LogOutBtn />
      <section className="w-full h-full overflow-auto">{children}</section>
      <NavBar />
    </div>
  );
}

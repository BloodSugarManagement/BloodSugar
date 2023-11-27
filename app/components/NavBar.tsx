"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Router {
  name: string;
  href: string;
  image: string;
  selectedImage: string;
}

export default function NavBar() {
  const home: Router = {
      name: "홈",
      href: "/record",
      image: "/image/unselectedHome.svg",
      selectedImage: "/image/selectedHome.svg",
    },
    chart = {
      name: "차트",
      href: "/chart",
      image: "/image/unselectedChart.svg",
      selectedImage: "/image/selectedChart.svg",
    },
    profile = {
      name: "프로필",
      href: "/profile",
      image: "/image/unselectedProfile.svg",
      selectedImage: "/image/selectedProfile.svg",
    };

  const Routes: Router[] = [home, chart, profile];

  return (
    <footer className="sticky bottom-0 w-full border-t pt-3 pb-1 bg-white">
      <ul className="flex">
        {Routes.map((route) => (
          <Anchor {...route} key={route.name} />
        ))}
      </ul>
    </footer>
  );
}

function Anchor({ name, href, image, selectedImage }: Router) {
  const pathname = usePathname();

  return (
    <li
      className={
        "flex-1 sticky bottom-0 bg-white" +
        (pathname === href ? " text-[#F5C045]" : "")
      }
    >
      <Link
        href={href}
        className="flex flex-col items-center text-xs text-center gap-1"
      >
        <img
          src={href === pathname ? selectedImage : image}
          className="w-6 h-6"
        />
        {name}
      </Link>
    </li>
  );
}

"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div className="flex h-[150px] flex-shrink-0 w-[100%] pd-default justify-between items-center">
      <div className="logo-text text-c5 pointer-events-none select-none">
        BreakThrough
      </div>
      <div className="flex justify-end gap-[57px] items-center flex-shrink-0">
        <Link href="/">
          <Button size="fix" className={currentPath === "/" ? "bg-c3" : ""}>
            Главная
          </Button>
        </Link>
        <Link href="/about">
          <Button
            size="fix"
            className={currentPath === "/about" ? "bg-c3" : ""}
          >
            О нас
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            size="fix"
            className={currentPath === "/contact" ? "bg-c3" : ""}
          >
            Связаться
          </Button>
        </Link>
        <Link href="/education">
          <Button
            size="fix"
            className={currentPath === "/education" ? "bg-c3" : ""}
          >
            Обучение
          </Button>
        </Link>
        <Button
          size="fix"
          variant="icon"
          className="w-[90px] h-[90px]"
        ></Button>
      </div>
    </div>
  );
};

export default Navbar;

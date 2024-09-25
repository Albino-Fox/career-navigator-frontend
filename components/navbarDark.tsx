"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div className="flex h-[150px] flex-shrink-0 w-[100%] pd-default justify-between items-center">
      <div className="logo-text text-c1 pointer-events-none select-none">
        BreakThrough
      </div>
      <div className="flex justify-end gap-[57px] items-center flex-shrink-0">
        <Link href="/education">
          <Button
            size="fix"
            variant="defaultdark"
            className={currentPath === "/education" ? "bg-c2" : ""}
          >
            Общая
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            size="fix"
            variant="defaultdark"
            className={currentPath === "/contact" ? "bg-c2" : ""}
          >
            Связаться
          </Button>
        </Link>
        <Link href="/">
          <Button size="fix" variant="defaultdark">
            На главную
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

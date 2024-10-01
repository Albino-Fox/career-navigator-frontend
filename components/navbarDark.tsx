"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  const searchParams = useSearchParams();

  let type = 0;
  if (currentPath.startsWith("/education/education-university")) type = 2;
  if (currentPath.startsWith("/education/education-work")) type = 1;
  if (!!searchParams.get("observe")) type = 1;
  return (
    <div className="flex h-[150px] flex-shrink-0 w-[100%] pd-default justify-between items-center">
      <div className="logo-text text-c1 pointer-events-none select-none">
        BreakThrough
      </div>
      <div className="flex justify-end gap-[57px] items-center flex-shrink-0">
        {type === 2 ? (
          <Link href="/education/education-university">
            <Button
              size="fix"
              variant="defaultdark"
              className={
                currentPath === "/education/education-university" ? "bg-c2" : ""
              }
            >
              Общая
            </Button>
          </Link>
        ) : (
          ""
        )}
        {type === 1 ? (
          <Link href="/education/education-work">
            <Button
              size="fix"
              variant="defaultdark"
              className={
                currentPath === "/education/education-work" ? "bg-c2" : ""
              }
            >
              Общая
            </Button>
          </Link>
        ) : (
          ""
        )}
        {type === 0 ? (
          <Link href="/education">
            <Button
              size="fix"
              variant="defaultdark"
              className={currentPath === "/education" ? "bg-c2" : ""}
            >
              Общая
            </Button>
          </Link>
        ) : (
          ""
        )}
        {type === 2 ? (
          <Link href="/education/education-university/check">
            <Button
              size="fix"
              variant="defaultdark"
              className={
                currentPath === "/education/education-university/check"
                  ? "bg-c2"
                  : ""
              }
            >
              Проверка
            </Button>
          </Link>
        ) : (
          ""
        )}
        {type === 1 ? (
          <Link href="/education/education-work/applications">
            <Button
              size="fix"
              variant="defaultdark"
              className={
                currentPath === "/education/education-work/applications"
                  ? "bg-c2"
                  : ""
              }
            >
              Заявки
            </Button>
          </Link>
        ) : (
          ""
        )}
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
        <Link href="/profile">
          <Button
            size="fix"
            variant="icon"
            className="w-[90px] h-[90px] big-text text-c5 font-extrabold"
          >
            П
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

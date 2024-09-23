"use client";

import { Button } from "@/components/ui/button";
// import { usePathname } from "next/navigation";

const Navbar = () => {
  // const path = usePathname();
  return (
    <div className="flex h-[150px] flex-shrink-0 w-[100%] pd-default justify-between items-center">
      <div className="logo-text text-c1 pointer-events-none select-none">
        BreakThrough
      </div>
      <div className="flex justify-end gap-[57px] items-center flex-shrink-0">
        <Button size="fix" variant="defaultdark">
          Общая
        </Button>
        <Button size="fix" variant="defaultdark">
          Связаться
        </Button>
        <Button size="fix" variant="defaultdark">
          На главную
        </Button>
        {/* <Button size="fix" variant="defaultdark"> */}
        {/*   Обучение */}
        {/* </Button> */}
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

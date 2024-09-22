"use client";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex h-[150px] flex-shrink-0 w-[100%] pd-default justify-between items-center">
      <div className="logo-text text-c5 pointer-events-none select-none">
        BreakThrough
      </div>
      <div className="flex justify-end gap-[57px] items-center flex-shrink-0">
        <Button size="fix">Главная</Button>
        <Button size="fix">О нас</Button>
        <Button size="fix">Связаться</Button>
        <Button size="fix">Обучение</Button>
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

"use client";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex h-[150px] w-[100%] pl-[94px] pr-[94px] justify-between items-center">
      <div className="logo-text text-5 pointer-events-none select-none">
        BreakThrough
      </div>
      <div className="flex justify-end gap-[57px] items-center">
        <Button>Главная</Button>
        <Button>О нас</Button>
        <Button>Связаться</Button>
        <Button>Обучение</Button>
        <Button variant="icon" className="w-[90px] h-[90px]"></Button>
      </div>
    </div>
  );
};

export default Navbar;

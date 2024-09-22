"use client";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <div className="absolute z-[-1] bg-c2 w-[50%] h-[110vh] h-max-[100%] overflow-y-hidden top-0 bot-0 rounded-tr-[475px]"></div>
      <div className="flex pd-default items-center justify-between">
        <div className="flex flex-col w-[720px]">
          <div className="font-light big-text pb-[62px]">
            Откройте для себя карьерные возможности и достигайте целей с нашим
            навигатором.
            <br />
            Начните путь к успеху сегодня!
          </div>
          <Button size="bigfill" variant="outline">
            Приступить к обучению
          </Button>
        </div>
        <div className="mr-[-60px]">
          <img src="/main.svg" alt="image.svg" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

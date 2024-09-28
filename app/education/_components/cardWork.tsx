"use client";

import { convertDifficultyToStars } from "@/lib/utils";
import { Skill } from "@/types/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardStudentWork from "./cardStudentWork";
import { Button } from "@/components/ui/button";

interface CardWorkProps {
  title?: string;
  description?: string;
  noFocus?: boolean;
  vacancies?: [];
  skill?: Skill;
}
const CardWork = ({
  title,
  description,
  noFocus = false,
  vacancies,
  skill,
}: CardWorkProps) => {
  return (
    <>
      {noFocus === false ? (
        <div className="bg-c1 p-[25px] rounded-[10px] text-black leading-none">
          <div className="big-text -mt-2">{title}</div>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="small-text border-b-2 border-black">
                Описание
              </AccordionTrigger>
              <AccordionContent className="leading-none small-text pt-5">
                {description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="py-5 flex flex-wrap justify-between">
            <div className="small-text leading-snug">
              {convertDifficultyToStars(skill!.difficulty)} {skill!.title} - У
              вас недостаточный уровень
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <Button>Отправить заявку</Button>
            <Button variant="destructive">Снять фокус</Button>
            <CardStudentWork
              vacancies={vacancies!}
              title={"Посмотреть другие"}
              className="small-btn-text"
            ></CardStudentWork>
          </div>
        </div>
      ) : (
        <div className="flex flex-col text-c1 justify-center border-c1 border-[2px] rounded-[10px] p-[40px]">
          <div className="big-text -mt-2 pb-[40px]">
            Вы ещё не выбрали задачу
          </div>

          <div className="flex flex-row justify-between items-center">
            <CardStudentWork
              vacancies={vacancies!}
              className="text-c1 small-btn-text"
              title="Посмотреть существующие задачи"
            ></CardStudentWork>
          </div>
        </div>
      )}
    </>
  );
};

export default CardWork;

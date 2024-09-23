"use client";

import { convertDifficultyToStars } from "@/lib/utils";
import { Skill } from "@/types/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CardWorkProps {
  title: string;
  description?: string;
  skill: Skill;
  children?: React.ReactNode;
}
const CardWork = ({ title, description, skill, children }: CardWorkProps) => {
  return (
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
          {convertDifficultyToStars(skill.difficulty)} {skill.title} - У вас
          недостаточный уровень
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        {children}
      </div>
    </div>
  );
};

export default CardWork;

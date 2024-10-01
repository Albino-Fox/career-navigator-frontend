"use client";

import { convertDifficultyToStars, sendRequest } from "@/lib/utils";
import { Skill } from "@/types/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface ListCardWorkProps {
  title: string;
  description?: string;
  skill: Skill;
  isTaken?: boolean;
  hasDeleteButton?: boolean;
  id?: number;
  children?: React.ReactNode;
}
const ListCardWork = ({
  title,
  description,
  skill,
  isTaken,
  hasDeleteButton = false,
  id,
  children,
}: ListCardWorkProps) => {
  return (
    <div className="bg-c1 p-[25px] mb-[15px] rounded-[10px] text-black leading-none">
      <div className="big-text -mt-2">{title}</div>
      <div className="pb-5 pt-2 flex items-center flex-wrap justify-between">
        <div className="normal-text leading-snug">
          {convertDifficultyToStars(skill.difficulty)} {skill.title}
        </div>
        {isTaken ? <div>[Выполняется]</div> : ""}
      </div>

      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className="small-text border-b-2 border-black mb-5">
            Описание
          </AccordionTrigger>
          <AccordionContent className="leading-none small-text pb-5">
            {description}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-row justify-between items-center">
        {children}
        {hasDeleteButton ? (
          <Button
            variant="destructive"
            className="w-[304px]"
            onClick={() => {
              sendRequest(
                JSON.stringify({ id: id }),
                "http://127.0.0.1:3001/api/vacancies/delete",
                "DELETE",
              );
              window.location.reload();
            }}
          >
            {isTaken ? "Закрыть и удалить" : "Удалить"}
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ListCardWork;
